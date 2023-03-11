let data = {
    development: ['Web Development', 'Mobile Development', 'Data Science', 'Programming Language', 'Game Development','No Code Development'],
    business: ['Entrepreneurship', 'Communication', 'Sales', 'Management'],
    finance: ['Account and Bookkeeping','Economics','Compliance','Cryptocurrence','Blockchain','Investing & Trading','Money Investing Tools'],
    design: ['Web Design','Graphic Design','3D & Animation','Game Design','UX Design','Design Tools'],
    marketing: ['Digital Marketing', 'SEO','Branding','Social Media Marketing','Public Relations','Paid Advertising'],
    lifestyle: ['Arts & Crafts','Beauty & Makeup','Food & Beverage','Gaming','Pet Care & Training','Other'],
}

// For Desktop
let categoris = document.getElementById('categories')
let navSection = document.getElementById('navigation-section')
let first = document.getElementById('first')

const changeContent = (container,type,node,classname)=> {
    let categoriesSubContainer = document.createElement('div')
    categoriesSubContainer.classList.add(`categories-subcontainer-${classname}`)
    categoriesSubContainer.id = 'categories-subcontainer-id'
    if(type==='object'){
        for(let keys in data){
            let div = document.createElement('div')
            let para = document.createElement('p')
            let img = document.createElement('img')
            let newKey = keys[0].toUpperCase() + keys.slice(1);
            div.classList.add('subcategory-icon');
            div.classList.add(`subcategory-${classname}-icon`)
            para.classList.add('subcategory')
            para.classList.add(`subcategory-${classname}`)
            para.id = keys
            para.innerText = newKey
            img.classList.add('arrow-icon')
            img.id = 'arrow-icon-id'
            img.src = 'arrow.png'
            div.appendChild(para);
            div.appendChild(img)
            categoriesSubContainer.appendChild(div)
        }
    }
    else if( type === 'array'){
        for(let i=0;i<data[node].length;i++){
            let para = document.createElement('p')
            para.classList.add(`subcategory-${classname}`)
            para.id = data[node][i]
            para.innerText = data[node][i]
            categoriesSubContainer.appendChild(para)
        }
    }
    
    container.appendChild(categoriesSubContainer)
}
first.addEventListener('mouseenter', () => {
    let isCategoriesContainerExist = document.getElementById('categories-container-id')
    if(!isCategoriesContainerExist){
        let categoriesContainer = document.createElement('div')
        categoriesContainer.classList.add('categories-container')
        categoriesContainer.id = 'categories-container-id'
        first.appendChild(categoriesContainer);
        changeContent(categoriesContainer,'object',null,'desktop-main');
        let subcategoriesArr = document.getElementsByClassName('subcategory-desktop-main')
        for(let i=0;i<subcategoriesArr.length;i++){
            subcategoriesArr[i].addEventListener('mouseenter',()=>{
                let isCategoriesSecondContainerExist = document.getElementById('categories-second-container-id')
                if(isCategoriesSecondContainerExist){
                    isCategoriesSecondContainerExist.remove()
                }
                let categoriesSecondContainer = document.createElement('div')
                categoriesSecondContainer.classList.add('categories-second-container')
                categoriesSecondContainer.id = 'categories-second-container-id'
                categoriesContainer.appendChild(categoriesSecondContainer)
                changeContent(categoriesSecondContainer,'array',subcategoriesArr[i].innerText.toLowerCase(),'desktop-sub')
            })
        }
    }
})

first.addEventListener('mouseleave',()=>{
    let categoriesContainer = document.getElementById('categories-container-id')
    categoriesContainer.remove();
})

// For Mobile

let hamburger = document.getElementById('hamburger-id')

let navMobile = document.getElementById('nav-mobile-id')


hamburger.addEventListener('click',()=>{
    let navMobile = document.createElement('div')
    let closeButton = document.createElement('button')
    let overlay = document.createElement('div')
    overlay.classList.add('overlay')
    document.body.appendChild(overlay)
    closeButton.classList.add('close-button')
    closeButton.id = 'close-button-id' 
    closeButton.innerText = 'X'
    navMobile.classList.add('mobile-div')
    navMobile.id = 'nav-mobile-id'
    navMobile.appendChild(closeButton)
    navSection.appendChild(navMobile)
    changeContent(navMobile,'object',null,'mobile-main')
    let subcategoriesArr = document.getElementsByClassName('subcategory-mobile-main')
    if(subcategoriesArr){
        for(let i=0;i<subcategoriesArr.length;i++){
            subcategoriesArr[i].addEventListener('click',()=>{
                let subMobileDiv = document.createElement('div')
                let backButton = document.createElement('button')
                backButton.classList.add('back-button')
                backButton.innerText = '< Back'
                subMobileDiv.classList.add('sub-mobile-div')
                subMobileDiv.id = 'sub-mobile-div-id'
                subMobileDiv.appendChild(backButton)
                navMobile.appendChild(subMobileDiv)
                changeContent(subMobileDiv,'array',subcategoriesArr[i].innerText.toLowerCase(),'mobile-sub')
                backButton.addEventListener('click',()=>{
                    subMobileDiv.classList.add('sub-mobile-div-deactivate')
                    setTimeout(()=>{
                        subMobileDiv.remove()
                    },300)
                })
            })
        }
    }
    closeButton.addEventListener('click',()=>{
        navMobile.classList.add('deactivate')
        closeButton.remove()
        overlay.remove()
        setTimeout(()=>{
            navMobile.remove()
        },200)
    })
})





