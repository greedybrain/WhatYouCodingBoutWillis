const mq_992 = window.matchMedia("(max-width: 992px)");
const mq_768 = window.matchMedia("(max-width: 768px)");
const mq_600 = window.matchMedia("(max-width: 600px)");

//todo Handling changes on viewport of 992 and lower
const doSomethingOnViewPort992AndLower = (test) => {
    if (test.matches) {
        nayaImageContWithCaptionMin.style.display = "none";
        nayaImageContWithCaptionMax.style.width = "39%";
        skillsEducation.style.width = "49%";
        copyright.style.fontSize = ".6rem";
        hireMe.style.fontSize = ".6rem";
        copyright.style.padding = "5px 0 0 10px";
        hireMe.style.padding = "5px 10px 0 0";
        editCont.style.width = "100%";
        Array.from(lineNumbersDivs).forEach((div) => {
            div.style.width = "7.5%";
            Array.from(div.querySelectorAll("ul li")).forEach((num) => {
                num.style.fontSize = "0.5rem";
            });
        });
    } else {
        nayaImageContWithCaptionMin.style.display = "block";
        nayaImageContWithCaptionMax.style.width = "35%";
        skillsEducation.style.width = "45%";
        copyright.style.fontSize = ".7rem";
        hireMe.style.fontSize = ".7rem";
        copyright.style.padding = "3px 0 0 10px";
        hireMe.style.padding = "3px 10px 0 0";
        editCont.style.width = "95%";
        Array.from(lineNumbersDivs).forEach((div) => {
            div.style.width = "5%";
            Array.from(div.querySelectorAll("ul li")).forEach((num) => {
                num.style.fontSize = "1rem";
            });
        });
    }
};

doSomethingOnViewPort992AndLower(mq_992);
mq_992.addListener(doSomethingOnViewPort992AndLower);

//todo Handling changes on viewport of 768 and lower
const doSomethingOnViewPort768AndLower = (test) => {
    if (test.matches) {
        titleInFooter.textContent = "WYCBW";
        hireMe.querySelector("div.hire a").textContent = "My Email";
        hireMe.querySelector("div.hire a").title =
            "whatyoucodingboutwillis@gmail.com";
        copyright.style.fontSize = ".7rem";
        hireMe.style.fontSize = ".7rem";
        explorer.style.display = "none";
    } else {
        titleInFooter.textContent = "WhatYouCodingBoutWillis";
        hireMe.querySelector("div.hire a").textContent =
            "whatyoucodingboutwillis@gmail.com";
        copyright.style.fontSize = ".5rem";
        hireMe.style.fontSize = ".5rem";
        handleSocialIconAnimation();
        explorer.style.display = "flex";
    }
};

doSomethingOnViewPort768AndLower(mq_768);
mq_768.addListener(doSomethingOnViewPort768AndLower);

//todo Handling changes on viewport of 600 and lower
const doSomethingOnViewPort600AndLower = (test) => {
    if (test.matches) {
        nayaImageContWithCaptionMax.querySelector(
            "div.name-wrapper "
        ).style.fontSize = ".8rem";
        nayaImageContWithCaptionMax.querySelector(
            "div.about-wrapper span, p.about"
        ).style.fontSize = ".8rem";

        dividers.forEach((divider) => {
            divider.style.fontSize = ".8rem";
        });
        education.querySelector("div.fs .fs-logo").style.width = "20px";
        education.querySelector("div.fs .fs-title").style.fontSize = ".8rem";
        Array.from(education.querySelectorAll("div.ed-icon i")).forEach((icon) => {
            icon.style.fontSize = ".7rem";
        });
        Array.from(education.querySelectorAll("div.award-info")).forEach(
            (award) => {
                award.style.fontSize = ".8rem";
            }
        );
        lineNumbersDivs.forEach((div) => {
            div.style.display = "none";
        });
        nayaImageContWithCaptionMax.style.width = "100%";
        nayaImageContWithCaptionMax.style.boxShadow =
            "0px 3px 12px -1px rgba(0,0,0,0.75)";
        // nayaImageContWithCaptionMax.style.paddingBottom = "20px";
        skillsEducation.style.width = "100%";
        Array.from(htmlMocks).forEach((mock) => {
            mock.style.fontSize = ".8rem";
        });
        Array.from(subtitles).forEach((title) => {
            title.style.fontSize = ".8rem";
        });
        Array.from(langTitles).forEach((title) => {
            title.style.fontSize = ".8rem";
        });
        Array.from(langLogos).forEach((logo) => {
            logo.style.width = "20px";
        });
        innerContent.style.flexDirection = "column";
    } else {
        nayaImageContWithCaptionMax.querySelector(
            "div.name-wrapper "
        ).style.fontSize = "1rem";
        nayaImageContWithCaptionMax.querySelector(
            "div.about-wrapper span, p.about"
        ).style.fontSize = "1rem";
        Array.from(dividers).forEach((divider) => {
            divider.style.fontSize = "1.1rem";
        });
        education.querySelector("div.fs .fs-logo").style.width = "30px";
        education.querySelector("div.fs .fs-title").style.fontSize = "1rem";
        Array.from(education.querySelectorAll("div.ed-icon i")).forEach((icon) => {
            icon.style.fontSize = "1.2rem";
        });
        lineNumbersDivs.forEach((div) => {
            div.style.display = "block";
        });
        nayaImageContWithCaptionMax.style.width = "39%";
        skillsEducation.style.width = "49%";
        Array.from(htmlMocks).forEach((mock) => {
            mock.style.fontSize = "1rem";
        });
        Array.from(subtitles).forEach((title) => {
            title.style.fontSize = "1rem";
        });
        Array.from(langTitles).forEach((title) => {
            title.style.fontSize = "1rem";
        });
        Array.from(langLogos).forEach((logo) => {
            logo.style.width = "30px";
        });
        innerContent.style.flexDirection = "row";
        nayaImageContWithCaptionMax.style.boxShadow = "none";
    }
};

doSomethingOnViewPort600AndLower(mq_600);
mq_600.addListener(doSomethingOnViewPort600AndLower);