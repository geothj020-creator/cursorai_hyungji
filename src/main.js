import './style.css'

// 자기소개 데이터
const profileData = {
  name: 'Hyungji',
  subtitle: '지리교사',
  introduction: `안녕하세요! 저는 창의적이고 열정적인 교사입니다. 
  .`,
  experiences: [
    {
      title: '지리교사',
      period: '',
      description: '지리 수업 설계'
    },
    {
      title: '프로젝트 리더',
      period: '2022.06 - 2022.12',
      description: '팀 프로젝트를 이끌며 협업과 소통의 중요성을 배웠습니다. 다양한 기술 스택을 활용한 프로젝트를 완수했습니다.'
    },
    {
      title: '인턴 개발자',
      period: '2021.03 - 2021.12',
      description: '실무 경험을 쌓으며 웹 개발의 전반적인 프로세스를 학습했습니다. 코드 리뷰와 버전 관리 시스템을 활용한 협업을 경험했습니다.'
    },
    {
      title: '학생 개발자',
      period: '2020.01 - 2021.02',
      description: '다양한 사이드 프로젝트를 통해 프로그래밍 기초를 탄탄히 다졌습니다. 알고리즘과 자료구조를 학습하며 문제 해결 능력을 향상시켰습니다.'
    }
  ]
}

// HTML 생성 함수
function createProfileHTML() {
  const introHTML = `
    <div class="intro-section fade-in">
      <h2>👋 자기소개</h2>
      <div class="intro-content">
        ${profileData.introduction}
      </div>
    </div>
  `

  const experienceHTML = `
    <div class="experience-section fade-in">
      <h2>💼 활동 경력</h2>
      <div class="experience-list">
        ${profileData.experiences.map(exp => `
          <div class="experience-card">
            <h3>${exp.title}</h3>
            <div class="period">📅 ${exp.period}</div>
            <div class="description">${exp.description}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `

  return `
    <div class="header">
      <h1>${profileData.name}</h1>
      <div class="subtitle">${profileData.subtitle}</div>
    </div>
    ${introHTML}
    ${experienceHTML}
  `
}

// 페이지 렌더링
document.querySelector('#app').innerHTML = createProfileHTML()

// 스크롤 애니메이션
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in')
    }
  })
}, observerOptions)

// 모든 섹션에 관찰자 적용
document.querySelectorAll('.intro-section, .experience-card').forEach(el => {
  observer.observe(el)
})
