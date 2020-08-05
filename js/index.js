const vscodeIcon = document.querySelector('div.vscode-icon')
const menuBar = document.querySelector('div.menu-bar')
const editorSimulation = document.querySelector('div.editor-simulation')
const wrapper = document.querySelector('div.wrapper')
const landingPage = document.querySelector('div.landing')
const socialIcons = document.querySelectorAll('.s-icon')
const numberList = document.querySelector('ul.number-list')
const user = document.querySelector('li.user')
const astronautIcon = user.querySelector('i')
const git = document.querySelector('li.git')
const gitIcon = git.querySelector('i')
const contact = document.querySelector('li.contact')
const contactMe = document.querySelector('li.contact-me')
const contactIcon = contactMe.querySelector('i')
const readme = document.querySelector('li.readme')
const gitProjects = document.querySelector('li.git-projects')
const readmePath = document.querySelector('div.readme-path')
const projectsPath = document.querySelector('div.projects-path')
const contactPath = document.querySelector('div.contact-path')
const nayaImageContWithCaptionMax = document.querySelector('div.naya-image-cont-max')
const nayaImageContWithCaptionMin = document.querySelector('div.naya-image-cont-min')

document.addEventListener("DOMContentLoaded", () => {
    handleIconAnimation()
    handleRemoveLandingPageThenShowPortfolio()
    handleNumberListRender()
    handleReadmeRender()
    handleGithubProjectsRender()
    handleContactRender()
})

const handleSocialIconAnimation = () => {
    let time = 700
    let icons = Array.from(socialIcons).reverse()
    icons.forEach(icon => {
        setTimeout(() => {
            icon.style.display = 'block'
            handleAnimation(icon, 'animate__bounceInDown')
        }, time)
        time += 250
    })

}

//todo handling vscodeIcon animation 

const handleIconAnimation = () => {
    vscodeIcon.addEventListener('mouseenter', () => {
        handleClearingAnimation(vscodeIcon)

    })
    vscodeIcon.addEventListener('mouseleave', () => {
        handleAnimation(vscodeIcon, 'animate__pulse', 'animate__faster', 'animate__infinite')
    })
}

const handleRemoveLandingPageThenShowPortfolio = () => {
    vscodeIcon.addEventListener('click', () => {
        handleAnimation(menuBar, 'animate__fadeOut')
        setTimeout(() => {
            handleAnimation(vscodeIcon, 'animate__fadeOut')
            vscodeIcon.style.display = 'none'
            document.body.style.backgroundImage = "url('/images/desktop-b3.jpeg')"
            handleSocialIconAnimation()
        }, 500);
        setTimeout(() => {
            landingPage.style.display = 'none'
            wrapper.style.minWidth = '1200px'
            wrapper.style.maxWidth = '1200px'
            editorSimulation.style.display = 'block'
            handleAnimation(editorSimulation, 'animate__fadeInUp', 'animate__fast')
        }, 1000);
    })
}

//todo handling rendering number list 

const handleNumberListRender = () => {
    for (let x = 1; x <= 36; x++) {
        const num = document.createElement('li')
        num.classList.add('number')
        num.textContent = x
        numberList.appendChild(num)
    }
}

//todo handle rendering READ.me 

const handleReadmeRender = () => {
    user.addEventListener('click', e => {
        // turn on user > readme 
        user.style.borderLeft = "2px solid #fff"
        astronautIcon.style.color = "#fff"
        readme.style.display = 'block'
        readme.style.backgroundColor = "#3f3f3f"
        readmePath.style.display = 'block'
        nayaImageContWithCaptionMax.style.display = 'block'
        nayaImageContWithCaptionMin.style.display = 'block'

        // turn off git stuff
        git.style.borderLeft = "none"
        gitIcon.style.color = "#b8b8b8"
        gitProjects.style.backgroundColor = "#505050"
        projectsPath.style.display = 'none'

        // turn off contact stuff 
        contactMe.style.borderLeft = "none"
        contactIcon.style.color = "#b8b8b8"
        contactPath.style.display = " none"
        contact.style.backgroundColor = "#505050"
    })
}

const handleGithubProjectsRender = () => {
    git.addEventListener('click', e => {
        // turn on user > projects 
        git.style.borderLeft = "2px solid #fff"
        gitIcon.style.color = "#fff"
        gitProjects.style.display = 'block'
        gitProjects.style.backgroundColor = "#3f3f3f"
        projectsPath.style.display = 'block'

        //turn off user stuff
        user.style.borderLeft = "none"
        astronautIcon.style.color = "#b8b8b8"
        readme.style.display = 'block'
        readmePath.style.display = 'none'
        readme.style.backgroundColor = "#505050"
        nayaImageContWithCaptionMax.style.display = 'none'
        nayaImageContWithCaptionMin.style.display = 'none'

        // turn off contact stuff 
        contactMe.style.borderLeft = "none"
        contactIcon.style.color = "#b8b8b8"
        contactPath.style.display = " none"
        contact.style.backgroundColor = "#505050"

    })
}

const handleContactRender = () => {
    contactMe.addEventListener('click', e => {
        contactMe.style.borderLeft = "2px solid #fff"
        contactIcon.style.color = "#fff"
        contact.style.display = 'block'
        contact.style.backgroundColor = "#3f3f3f"
        contactPath.style.display = 'block'

        // turn off project stuff 
        git.style.borderLeft = "none"
        gitIcon.style.color = "#b8b8b8"
        gitProjects.style.backgroundColor = "#505050"
        projectsPath.style.display = 'none'

        // turn off user 
        user.style.borderLeft = "none"
        astronautIcon.style.color = "#b8b8b8"
        readme.style.display = 'block'
        readmePath.style.display = 'none'
        readme.style.backgroundColor = "#505050"
        nayaImageContWithCaptionMax.style.display = 'none'
        nayaImageContWithCaptionMin.style.display = 'none'
    })
}

//! HELPERS 

//todo start and customize animations 
const handleAnimation = (element, effect, speed = null, frequency = null) => {
    if (effect === null) {
        alert("Please add effect")
        return;
    } else {
        element.classList.add(
            'animate__animated',
            effect,
            speed,
            frequency
        )
    }
}

//todo Clearing animations 
const handleClearingAnimation = element => {
    element.classList.remove('animate__animated')
}

// li.user {
//     i {
//         color: #fff;
//     }
// }