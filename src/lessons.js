export const lessons = [
    {
        id: 1,
        teacher: 'Shiba Teacher',
        teacherEmoji: '🐕',
        greeting: '안녕하세요! I am Shiba Teacher!<br>Today we will learn Korean vowels <span class="korean">한글</span>!',
        content: [
            {
                type: 'teach',
                text: 'The first vowel is <span class="korean">ㅏ</span><br>It sounds like "ah" in "father"'
            },
            {
                type: 'quiz',
                question: 'How do you pronounce this letter?',
                character: 'ㅏ',
                options: ['a (ah)', 'o (oh)', 'u (oo)', 'i (ee)'],
                answer: 0
            },
            {
                type: 'teach',
                text: 'Great! Next is <span class="korean">ㅓ</span><br>It sounds like "uh" in "sun"'
            },
            {
                type: 'quiz',
                question: 'How do you pronounce this letter?',
                character: 'ㅓ',
                options: ['a (ah)', 'eo (uh)', 'u (oo)', 'i (ee)'],
                answer: 1
            },
            {
                type: 'teach',
                text: 'Awesome! Now <span class="korean">ㅗ</span><br>It sounds like "oh" in "go"'
            },
            {
                type: 'quiz',
                question: 'How do you pronounce this letter?',
                character: 'ㅗ',
                options: ['a (ah)', 'eo (uh)', 'o (oh)', 'u (oo)'],
                answer: 2
            },
            {
                type: 'teach',
                text: 'Keep going! <span class="korean">ㅜ</span> sounds like "oo" in "moon"'
            },
            {
                type: 'quiz',
                question: 'How do you pronounce this letter?',
                character: 'ㅜ',
                options: ['a (ah)', 'o (oh)', 'u (oo)', 'i (ee)'],
                answer: 2
            },
            {
                type: 'teach',
                text: 'Last one! <span class="korean">ㅣ</span> sounds like "ee" in "see"'
            },
            {
                type: 'quiz',
                question: 'How do you pronounce this letter?',
                character: 'ㅣ',
                options: ['a (ah)', 'o (oh)', 'u (oo)', 'i (ee)'],
                answer: 3
            }
        ],
        complete: 'Congratulations! Lesson 1 complete!<br><span class="korean">잘했어요!</span> (Well done!)<br>+50 XP!'
    },
    {
        id: 2,
        teacher: 'Shiba Teacher',
        teacherEmoji: '🐕',
        greeting: '다시 만나서 반가워요!<br>Today we will learn Korean <span class="korean">consonants</span>!',
        content: [
            {
                type: 'teach',
                text: 'The first consonant is <span class="korean">ㄱ</span><br>It sounds like "g" or "k"'
            },
            {
                type: 'quiz',
                question: 'How do you pronounce this letter?',
                character: 'ㄱ',
                options: ['g/k', 'n', 'd/t', 'r/l'],
                answer: 0
            },
            {
                type: 'teach',
                text: 'Next is <span class="korean">ㄴ</span><br>It sounds like "n" in "no"'
            },
            {
                type: 'quiz',
                question: 'How do you pronounce this letter?',
                character: 'ㄴ',
                options: ['g/k', 'n', 'd/t', 'r/l'],
                answer: 1
            },
            {
                type: 'teach',
                text: 'Now <span class="korean">ㄷ</span><br>It sounds like "d" or "t"'
            },
            {
                type: 'quiz',
                question: 'How do you pronounce this letter?',
                character: 'ㄷ',
                options: ['g/k', 'n', 'd/t', 'r/l'],
                answer: 2
            },
            {
                type: 'teach',
                text: 'This is <span class="korean">ㄹ</span><br>It sounds between "r" and "l"'
            },
            {
                type: 'quiz',
                question: 'How do you pronounce this letter?',
                character: 'ㄹ',
                options: ['g/k', 'n', 'd/t', 'r/l'],
                answer: 3
            },
            {
                type: 'teach',
                text: 'Finally <span class="korean">ㅁ</span><br>It sounds like "m" in "mom"'
            },
            {
                type: 'quiz',
                question: 'How do you pronounce this letter?',
                character: 'ㅁ',
                options: ['b/p', 's', 'm', 'ng'],
                answer: 2
            }
        ],
        complete: 'Lesson 2 complete!<br><span class="korean">대단해요!</span> (Amazing!)<br>+50 XP!'
    },
    {
        id: 3,
        teacher: 'Husky Teacher',
        teacherEmoji: '🐺',
        greeting: '안녕! I am Husky Teacher!<br>Today we learn <span class="korean">basic phrases</span>!',
        content: [
            {
                type: 'teach',
                text: '<span class="korean">안녕하세요</span><br>Means "Hello" (formal)'
            },
            {
                type: 'quiz',
                question: 'What does 안녕하세요 mean?',
                character: '안녕하세요',
                options: ['Thank you', 'Hello', 'Goodbye', 'Sorry'],
                answer: 1
            },
            {
                type: 'teach',
                text: '<span class="korean">감사합니다</span><br>Means "Thank you" (formal)'
            },
            {
                type: 'quiz',
                question: 'What does 감사합니다 mean?',
                character: '감사합니다',
                options: ['Thank you', 'Hello', 'Goodbye', 'Sorry'],
                answer: 0
            },
            {
                type: 'teach',
                text: '<span class="korean">안녕히 가세요</span><br>Means "Goodbye" (to someone leaving)'
            },
            {
                type: 'quiz',
                question: 'What does 안녕히 가세요 mean?',
                character: '안녕히 가세요',
                options: ['Thank you', 'Hello', 'Goodbye', 'Sorry'],
                answer: 2
            },
            {
                type: 'teach',
                text: '<span class="korean">죄송합니다</span><br>Means "I\'m sorry" (formal)'
            },
            {
                type: 'quiz',
                question: 'What does 죄송합니다 mean?',
                character: '죄송합니다',
                options: ['Thank you', 'Hello', 'Goodbye', 'Sorry'],
                answer: 3
            },
            {
                type: 'teach',
                text: '<span class="korean">네 / 아니요</span><br>Means "Yes / No"'
            },
            {
                type: 'quiz',
                question: 'What does 네 mean?',
                character: '네',
                options: ['Yes', 'No', 'OK', 'Not OK'],
                answer: 0
            }
        ],
        complete: 'Lesson 3 complete!<br><span class="korean">정말 잘했어요!</span> (Really well done!)<br>+50 XP!'
    },
    {
        id: 4,
        teacher: 'Corgi Teacher',
        teacherEmoji: '🦊',
        greeting: '반갑습니다! I am Corgi Teacher!<br>Today we learn <span class="korean">numbers</span>!',
        content: [
            {
                type: 'teach',
                text: 'Korean numbers 1-5:<br><span class="korean">일(1) 이(2) 삼(3) 사(4) 오(5)</span>'
            },
            {
                type: 'quiz',
                question: 'What number is 삼?',
                character: '삼',
                options: ['1', '2', '3', '4'],
                answer: 2
            },
            {
                type: 'teach',
                text: 'Korean numbers 6-10:<br><span class="korean">육(6) 칠(7) 팔(8) 구(9) 십(10)</span>'
            },
            {
                type: 'quiz',
                question: 'What number is 팔?',
                character: '팔',
                options: ['6', '7', '8', '9'],
                answer: 2
            },
            {
                type: 'quiz',
                question: 'How do you say 5 in Korean?',
                character: '5',
                options: ['사', '오', '육', '칠'],
                answer: 1
            },
            {
                type: 'quiz',
                question: 'How do you say 10 in Korean?',
                character: '10',
                options: ['팔', '구', '십', '일'],
                answer: 2
            }
        ],
        complete: 'Lesson 4 complete!<br><span class="korean">숫자 마스터!</span> (Number Master!)<br>+50 XP!'
    }
];
