import * as THREE from 'three';
import { lessons } from './lessons.js';
import { saveProgress, submitScore, getCurrentUser } from './viverse.js';
import { audioManager } from './audio.js';

export class GameManager {
    constructor(scene, camera, shibaTeacher) {
        this.scene = scene;
        this.camera = camera;
        this.shibaTeacher = shibaTeacher;
        
        this.state = {
            level: 1,
            xp: 0,
            totalScore: 0,
            isPlaying: false,
            currentLessonIndex: 0,
            currentContentIndex: 0,
            completedLessons: []
        };

        this.raycaster = new THREE.Raycaster();
        this.mouse = new THREE.Vector2();
        this.isDragging = false;
        this.prevMouse = { x: 0, y: 0 };

        this.setupControls();
    }

    loadState(savedState) {
        if (savedState) {
            this.state = { ...this.state, ...savedState };
            this.updateHUD();
            console.log('Loaded saved progress:', this.state);
        }
    }

    async saveState() {
        const progressData = {
            level: this.state.level,
            xp: this.state.xp,
            totalScore: this.state.totalScore,
            completedLessons: this.state.completedLessons
        };
        await saveProgress(progressData);
    }

    resetState() {
        this.state = {
            level: 1,
            xp: 0,
            totalScore: 0,
            isPlaying: false,
            currentLessonIndex: 0,
            currentContentIndex: 0,
            completedLessons: []
        };
        this.updateHUD();
    }

    setPlayerName(name) {
        this.playerName = name;
    }

    setupControls() {
        const canvas = document.querySelector('canvas');
        if (!canvas) {
            console.error('Canvas not found for controls');
            return;
        }
        
        canvas.addEventListener('mousedown', (e) => {
            this.isDragging = true;
            this.prevMouse = { x: e.clientX, y: e.clientY };
        });

        canvas.addEventListener('mouseup', () => {
            this.isDragging = false;
        });

        canvas.addEventListener('mousemove', (e) => {
            if (!this.isDragging || !this.state.isPlaying) return;
            
            const deltaX = e.clientX - this.prevMouse.x;
            const rotationSpeed = 0.005;
            
            const camX = this.camera.position.x;
            const camZ = this.camera.position.z;
            const angle = deltaX * rotationSpeed;
            
            this.camera.position.x = camX * Math.cos(angle) - camZ * Math.sin(angle);
            this.camera.position.z = camX * Math.sin(angle) + camZ * Math.cos(angle);
            this.camera.lookAt(0, 1, 0);
            
            this.prevMouse = { x: e.clientX, y: e.clientY };
        });

        canvas.addEventListener('click', (e) => {
            if (!this.state.isPlaying) return;
            
            this.mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
            this.mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
            
            this.raycaster.setFromCamera(this.mouse, this.camera);
            const hits = this.raycaster.intersectObjects(this.shibaTeacher.children, true);
            
            if (hits.length > 0) {
                this.startLesson();
            }
        });
    }

    start() {
        document.getElementById('start-screen').style.display = 'none';
        document.getElementById('hud').style.display = 'block';
        document.getElementById('controls-hint').style.display = 'block';
        document.getElementById('hint').style.display = 'block';
        document.getElementById('lesson-btn').style.display = 'block';
        this.state.isPlaying = true;
        
        audioManager.init();
        this.setupLessonMenu();
    }

    setupLessonMenu() {
        const lessonBtn = document.getElementById('lesson-btn');
        lessonBtn.addEventListener('click', () => this.showLessonMenu());
        
        window.closeLessonMenu = () => this.hideLessonMenu();
        window.selectLesson = (index) => this.selectLesson(index);
    }

    showLessonMenu() {
        const menu = document.getElementById('lesson-menu');
        const list = document.getElementById('lesson-list');
        
        list.innerHTML = '';
        
        const lessonData = [
            { icon: '🐕', title: 'Lesson 1: Vowels', desc: 'ㅏ ㅓ ㅗ ㅜ ㅣ' },
            { icon: '🐕', title: 'Lesson 2: Consonants', desc: 'ㄱ ㄴ ㄷ ㄹ ㅁ' },
            { icon: '🐺', title: 'Lesson 3: Basic Phrases', desc: '안녕하세요, 감사합니다' },
            { icon: '🦊', title: 'Lesson 4: Numbers', desc: '일 이 삼 사 오...' }
        ];
        
        lessonData.forEach((lesson, index) => {
            const isCompleted = this.state.completedLessons.includes(index);
            const isCurrent = index === this.state.currentLessonIndex;
            
            const item = document.createElement('div');
            item.className = `lesson-item ${isCompleted ? 'completed' : ''}`;
            item.onclick = () => this.selectLesson(index);
            
            item.innerHTML = `
                <span class="lesson-icon">${lesson.icon}</span>
                <div class="lesson-info">
                    <h3>${lesson.title}</h3>
                    <p>${lesson.desc}</p>
                </div>
                <span class="lesson-status">${isCompleted ? '✅' : isCurrent ? '📖' : '○'}</span>
            `;
            
            list.appendChild(item);
        });
        
        menu.style.display = 'block';
    }

    hideLessonMenu() {
        document.getElementById('lesson-menu').style.display = 'none';
    }

    selectLesson(index) {
        this.state.currentLessonIndex = index;
        this.state.currentContentIndex = 0;
        this.hideLessonMenu();
        this.startLesson();
    }

    startLesson() {
        document.getElementById('hint').style.display = 'none';
        this.state.currentContentIndex = 0;
        
        const lesson = lessons[this.state.currentLessonIndex];
        this.showDialogue(lesson.greeting, [
            { text: 'OK, let\'s start! 네, 시작해요!', action: () => this.nextContent() }
        ]);
    }

    nextContent() {
        const lesson = lessons[this.state.currentLessonIndex];
        
        if (this.state.currentContentIndex >= lesson.content.length) {
            this.completeLesson();
            return;
        }

        const content = lesson.content[this.state.currentContentIndex];

        if (content.type === 'teach') {
            this.showDialogue(content.text, [
                { text: 'Got it! 알겠어요!', action: () => {
                    this.state.currentContentIndex++;
                    this.nextContent();
                }}
            ]);
        } else if (content.type === 'quiz') {
            this.hideDialogue();
            this.showQuiz(content);
        }
    }

    showDialogue(text, options) {
        const box = document.getElementById('dialogue-box');
        const textEl = document.getElementById('dialogue-text');
        const optionsEl = document.getElementById('dialogue-options');

        textEl.innerHTML = text;
        optionsEl.innerHTML = '';

        options.forEach(opt => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.textContent = opt.text;
            btn.onclick = opt.action;
            optionsEl.appendChild(btn);
        });

        box.style.display = 'block';
    }

    hideDialogue() {
        document.getElementById('dialogue-box').style.display = 'none';
    }

    showQuiz(quiz) {
        const panel = document.getElementById('quiz-panel');
        const title = document.getElementById('quiz-title');
        const character = document.getElementById('quiz-character');
        const optionsEl = document.getElementById('quiz-options');

        title.textContent = quiz.question;
        character.textContent = quiz.character;
        optionsEl.innerHTML = '';

        quiz.options.forEach((opt, idx) => {
            const btn = document.createElement('button');
            btn.className = 'quiz-btn';
            btn.textContent = opt;
            btn.onclick = () => this.checkAnswer(idx, quiz.answer, btn);
            optionsEl.appendChild(btn);
        });

        panel.style.display = 'block';
    }

    checkAnswer(selected, correct, btn) {
        const allBtns = document.querySelectorAll('.quiz-btn');
        allBtns.forEach(b => b.disabled = true);

        if (selected === correct) {
            btn.style.background = '#38ef7d';
            btn.style.color = 'white';
            audioManager.playCorrect();
            this.addXP(20);
            
            setTimeout(() => {
                document.getElementById('quiz-panel').style.display = 'none';
                this.state.currentContentIndex++;
                this.nextContent();
            }, 1000);
        } else {
            btn.style.background = '#f45c43';
            btn.style.color = 'white';
            allBtns[correct].style.background = '#38ef7d';
            allBtns[correct].style.color = 'white';
            audioManager.playWrong();

            setTimeout(() => {
                allBtns.forEach(b => {
                    b.disabled = false;
                    b.style.background = '#f0f0f0';
                    b.style.color = 'black';
                });
            }, 1500);
        }
    }

    addXP(amount) {
        this.state.xp += amount;
        
        if (this.state.xp >= 100) {
            this.state.level++;
            this.state.xp -= 100;
            audioManager.playLevelUp();
            this.showPopup(`Level Up! Level ${this.state.level}`);
        }

        this.updateHUD();
    }

    updateHUD() {
        document.getElementById('level').textContent = this.state.level;
        document.getElementById('xp').textContent = this.state.xp;
        document.getElementById('xp-fill').style.width = `${this.state.xp}%`;
    }

    async completeLesson() {
        this.addXP(50);
        this.state.totalScore += 100;
        this.state.completedLessons.push(this.state.currentLessonIndex);
        
        await this.saveState();
        await submitScore(this.state.totalScore);
        
        const lesson = lessons[this.state.currentLessonIndex];
        const lessonNum = this.state.currentLessonIndex + 1;
        const hasNextLesson = this.state.currentLessonIndex < lessons.length - 1;
        
        const options = [];
        if (hasNextLesson) {
            options.push({ 
                text: 'Next Lesson! 다음 수업!', 
                action: () => {
                    this.hideDialogue();
                    this.state.currentLessonIndex++;
                    this.state.currentContentIndex = 0;
                    this.showPopup(`Lesson ${lessonNum} Complete!`);
                    setTimeout(() => this.startLesson(), 1500);
                }
            });
        }
        options.push({ 
            text: hasNextLesson ? 'Take a break' : 'Thank you teacher! 감사합니다!', 
            action: () => {
                this.hideDialogue();
                this.showPopup(hasNextLesson ? `Lesson ${lessonNum} Complete!` : '🎉 All Lessons Complete!');
                document.getElementById('hint').style.display = 'block';
                document.getElementById('hint').textContent = hasNextLesson 
                    ? 'Click on the teacher to continue!' 
                    : 'Congratulations! You completed all lessons!';
            }
        });
        
        this.showDialogue(lesson.complete, options);
    }

    showPopup(text) {
        const popup = document.createElement('div');
        popup.className = 'success-popup';
        popup.textContent = text;
        document.body.appendChild(popup);

        setTimeout(() => popup.remove(), 2000);
    }
}
