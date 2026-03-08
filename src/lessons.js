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
    },
    {
        id: 5,
        teacher: 'Shiba Teacher',
        teacherEmoji: '🐕',
        greeting: '오늘은 자기소개!<br>Today we learn <span class="korean">self-introduction</span>!',
        content: [
            {
                type: 'teach',
                text: '<span class="korean">저는 ___입니다</span><br>Means "I am ___" (formal)'
            },
            {
                type: 'quiz',
                question: 'How do you say "I am" in Korean?',
                character: '저는 ___입니다',
                options: ['저는', '너는', '우리는', '그는'],
                answer: 0
            },
            {
                type: 'teach',
                text: '<span class="korean">제 이름은 ___입니다</span><br>Means "My name is ___"'
            },
            {
                type: 'quiz',
                question: 'What does 이름 mean?',
                character: '이름',
                options: ['Age', 'Name', 'Job', 'Country'],
                answer: 1
            },
            {
                type: 'teach',
                text: '<span class="korean">만나서 반갑습니다</span><br>Means "Nice to meet you"'
            },
            {
                type: 'quiz',
                question: 'What does 만나서 반갑습니다 mean?',
                character: '만나서 반갑습니다',
                options: ['Goodbye', 'Thank you', 'Nice to meet you', 'See you later'],
                answer: 2
            },
            {
                type: 'teach',
                text: '<span class="korean">저는 학생입니다</span><br>Means "I am a student"'
            },
            {
                type: 'quiz',
                question: 'What does 학생 mean?',
                character: '학생',
                options: ['Teacher', 'Student', 'Doctor', 'Worker'],
                answer: 1
            }
        ],
        complete: 'Lesson 5 complete!<br><span class="korean">자기소개 완료!</span> (Self-intro done!)<br>+50 XP!'
    },
    {
        id: 6,
        teacher: 'Husky Teacher',
        teacherEmoji: '🐺',
        greeting: '숫자 시간!<br>Today we learn <span class="korean">native Korean numbers</span>!',
        content: [
            {
                type: 'teach',
                text: 'Native Korean numbers 1-5:<br><span class="korean">하나(1) 둘(2) 셋(3) 넷(4) 다섯(5)</span>'
            },
            {
                type: 'quiz',
                question: 'What is 하나?',
                character: '하나',
                options: ['1', '2', '3', '4'],
                answer: 0
            },
            {
                type: 'quiz',
                question: 'What is 셋?',
                character: '셋',
                options: ['1', '2', '3', '4'],
                answer: 2
            },
            {
                type: 'teach',
                text: 'Native Korean numbers 6-10:<br><span class="korean">여섯(6) 일곱(7) 여덟(8) 아홉(9) 열(10)</span>'
            },
            {
                type: 'quiz',
                question: 'What is 열?',
                character: '열',
                options: ['7', '8', '9', '10'],
                answer: 3
            },
            {
                type: 'quiz',
                question: 'How do you say 2 in native Korean?',
                character: '2',
                options: ['하나', '둘', '셋', '넷'],
                answer: 1
            }
        ],
        complete: 'Lesson 6 complete!<br><span class="korean">고유어 숫자 마스터!</span><br>+50 XP!'
    },
    {
        id: 7,
        teacher: 'Corgi Teacher',
        teacherEmoji: '🦊',
        greeting: '가족을 배워요!<br>Today we learn <span class="korean">family words</span>!',
        content: [
            {
                type: 'teach',
                text: '<span class="korean">아버지 / 아빠</span><br>Means "Father / Dad"'
            },
            {
                type: 'quiz',
                question: 'What does 아빠 mean?',
                character: '아빠',
                options: ['Mom', 'Dad', 'Brother', 'Sister'],
                answer: 1
            },
            {
                type: 'teach',
                text: '<span class="korean">어머니 / 엄마</span><br>Means "Mother / Mom"'
            },
            {
                type: 'quiz',
                question: 'What does 엄마 mean?',
                character: '엄마',
                options: ['Mom', 'Dad', 'Brother', 'Sister'],
                answer: 0
            },
            {
                type: 'teach',
                text: '<span class="korean">형 / 오빠</span><br>Means "Older brother" (형 for males, 오빠 for females)'
            },
            {
                type: 'quiz',
                question: 'A girl calls her older brother:',
                character: 'Older brother (for girls)',
                options: ['형', '오빠', '누나', '언니'],
                answer: 1
            },
            {
                type: 'teach',
                text: '<span class="korean">누나 / 언니</span><br>Means "Older sister" (누나 for males, 언니 for females)'
            },
            {
                type: 'quiz',
                question: 'A boy calls his older sister:',
                character: 'Older sister (for boys)',
                options: ['형', '오빠', '누나', '언니'],
                answer: 2
            }
        ],
        complete: 'Lesson 7 complete!<br><span class="korean">가족 마스터!</span> (Family Master!)<br>+50 XP!'
    },
    {
        id: 8,
        teacher: 'Shiba Teacher',
        teacherEmoji: '🐕',
        greeting: '맛있는 음식!<br>Today we learn <span class="korean">food words</span>!',
        content: [
            {
                type: 'teach',
                text: '<span class="korean">밥</span> = Rice<br><span class="korean">물</span> = Water'
            },
            {
                type: 'quiz',
                question: 'What does 밥 mean?',
                character: '밥',
                options: ['Water', 'Rice', 'Bread', 'Meat'],
                answer: 1
            },
            {
                type: 'teach',
                text: '<span class="korean">고기</span> = Meat<br><span class="korean">생선</span> = Fish'
            },
            {
                type: 'quiz',
                question: 'What does 생선 mean?',
                character: '생선',
                options: ['Meat', 'Chicken', 'Fish', 'Pork'],
                answer: 2
            },
            {
                type: 'teach',
                text: '<span class="korean">김치</span> = Kimchi<br><span class="korean">라면</span> = Ramen'
            },
            {
                type: 'quiz',
                question: 'What is 김치?',
                character: '김치',
                options: ['Ramen', 'Rice cake', 'Kimchi', 'Soup'],
                answer: 2
            },
            {
                type: 'teach',
                text: '<span class="korean">맛있어요!</span><br>Means "It\'s delicious!"'
            },
            {
                type: 'quiz',
                question: 'What does 맛있어요 mean?',
                character: '맛있어요',
                options: ['I\'m hungry', 'It\'s delicious', 'I\'m full', 'I want more'],
                answer: 1
            }
        ],
        complete: 'Lesson 8 complete!<br><span class="korean">음식 마스터!</span> (Food Master!)<br>+50 XP!'
    },
    {
        id: 9,
        teacher: 'Husky Teacher',
        teacherEmoji: '🐺',
        greeting: '색깔을 배워요!<br>Today we learn <span class="korean">colors</span>!',
        content: [
            {
                type: 'teach',
                text: '<span class="korean">빨간색</span> = Red<br><span class="korean">파란색</span> = Blue'
            },
            {
                type: 'quiz',
                question: 'What color is 빨간색?',
                character: '빨간색',
                options: ['Blue', 'Red', 'Green', 'Yellow'],
                answer: 1
            },
            {
                type: 'teach',
                text: '<span class="korean">노란색</span> = Yellow<br><span class="korean">초록색</span> = Green'
            },
            {
                type: 'quiz',
                question: 'What color is 노란색?',
                character: '노란색',
                options: ['Blue', 'Red', 'Green', 'Yellow'],
                answer: 3
            },
            {
                type: 'teach',
                text: '<span class="korean">하얀색</span> = White<br><span class="korean">검은색</span> = Black'
            },
            {
                type: 'quiz',
                question: 'What color is 검은색?',
                character: '검은색',
                options: ['White', 'Black', 'Gray', 'Brown'],
                answer: 1
            },
            {
                type: 'quiz',
                question: 'How do you say "blue" in Korean?',
                character: 'Blue',
                options: ['빨간색', '파란색', '노란색', '초록색'],
                answer: 1
            }
        ],
        complete: 'Lesson 9 complete!<br><span class="korean">색깔 마스터!</span> (Color Master!)<br>+50 XP!'
    },
    {
        id: 10,
        teacher: 'Corgi Teacher',
        teacherEmoji: '🦊',
        greeting: '복습 시간!<br>Time for <span class="korean">Beginner Review</span>!',
        content: [
            {
                type: 'quiz',
                question: 'How do you say "Hello" in Korean?',
                character: 'Hello',
                options: ['감사합니다', '안녕하세요', '죄송합니다', '안녕히 가세요'],
                answer: 1
            },
            {
                type: 'quiz',
                question: 'What vowel sounds like "ah"?',
                character: 'ah',
                options: ['ㅏ', 'ㅓ', 'ㅗ', 'ㅜ'],
                answer: 0
            },
            {
                type: 'quiz',
                question: 'What is 삼 (sam)?',
                character: '삼',
                options: ['1', '2', '3', '4'],
                answer: 2
            },
            {
                type: 'quiz',
                question: 'What does 엄마 mean?',
                character: '엄마',
                options: ['Dad', 'Mom', 'Sister', 'Brother'],
                answer: 1
            },
            {
                type: 'quiz',
                question: 'What color is 파란색?',
                character: '파란색',
                options: ['Red', 'Yellow', 'Blue', 'Green'],
                answer: 2
            },
            {
                type: 'quiz',
                question: 'What does 맛있어요 mean?',
                character: '맛있어요',
                options: ['Hello', 'Thank you', 'Delicious', 'Goodbye'],
                answer: 2
            }
        ],
        complete: 'Beginner Course Complete!<br><span class="korean">초급 완료!</span> (Beginner Done!)<br>+100 XP!'
    }
];
