document.addEventListener('DOMContentLoaded', function () {
    const header = document.createElement('header');
    header.className = 'w-full bg-[#FFFFFF] rounded-2xl';
    header.style.boxShadow = "0px 48px 96px 0px rgba(66, 62, 121, 0.06)";
    
    const headerContainer = document.createElement('div');
    headerContainer.className = 'container mx-auto';
    
    const headerContent = document.createElement('div');
    headerContent.className = 'header max-w-[1280px] flex items-center justify-between p-[16px] lg:py-[32px] lg:px-[34px] mx-auto';
    
    const logoLink = document.createElement('a');
    logoLink.href = '/';
    
    const logoImg = document.createElement('img');
    logoImg.className = 'w-full';
    logoImg.src = './images/logo.svg';
    logoImg.alt = 'Logo';
    logoImg.width = 157;
    logoImg.height = 24;
    logoLink.appendChild(logoImg);
    
    headerContent.appendChild(logoLink);
    
    const menu = document.createElement('ul');
    menu.className = 'hidden items-center justify-center gap-6 lg:gap-11 md:flex menu';
    
    const menuItems = ['FAQ', 'Docs', 'Intergations', 'Pricing'];
    menuItems.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.className = 'text-xs font-normal leading-6 text-left text-[#535479] hover:text-black';
        a.href = '/';
        a.textContent = item;
        li.appendChild(a);
        menu.appendChild(li);
    });
    
    headerContent.appendChild(menu);
    
    const loginDiv = document.createElement('div');
    loginDiv.className = 'login hidden items-center gap-2 lg:gap-4 md:flex';
    
    const loginLink = document.createElement('a');
    loginLink.className = 'bg-[#ffffff] border-[1px] border-[#ffffff] pt-[7px] pb-[8px] px-[24px] text-[#535479] rounded-[40px] hover:border-[1px] hover:border-black duration-150 text-sm font-normal leading-4 text-left';
    loginLink.href = '/';
    loginLink.textContent = 'Login';
    
    const signUpLink = document.createElement('a');
    signUpLink.className = 'bg-[#0E0B3D] border-[1px] border-[#0e0b3d] pt-[7px] pb-[8px] px-[24px] text-white rounded-[40px] hover:bg-transparent hover:text-[#0e0b3d] hover:border-[1px] hover:border-[#0e0b3d] duration-150 text-sm font-normal leading-4 text-left';
    signUpLink.href = '/';
    signUpLink.textContent = 'Sign up';
    
    loginDiv.appendChild(loginLink);
    loginDiv.appendChild(signUpLink);
    
    headerContent.appendChild(loginDiv);
    
    
    const burger = document.createElement("div");
    burger.className = "burger flex items-center justify-center md:hidden"; 
    const burgerImg = document.createElement("svg");
    burgerImg.className = "w-6 h-6";
    burgerImg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    burgerImg.setAttribute('viewbox', '0 0 24 24');
    burgerImg.setAttribute('width', "24");
    burgerImg.setAttribute("height", "24");
    const burgerImgPath = document.createElement('path');
    burgerImgPath.setAttribute('fill', 'black');
    burgerImgPath.setAttribute('d', 'M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z');
    burgerImg.appendChild(burgerImgPath);
    burger.appendChild(burgerImg)
    headerContent.appendChild(burger);
    
    headerContainer.appendChild(headerContent);
    header.appendChild(headerContainer);
    document.body.appendChild(header);
    
    const main = document.createElement('main');
    main.className = 'md:pt-[106px] pt-[40px]';
    
    const mainContainer = document.createElement('div');
    mainContainer.className = 'container mx-auto px-4';
    
    const mainContent = document.createElement('div');
    mainContent.className = 'content-auto text-center max-w-[600px] mx-auto';
    
    const span = document.createElement('span');
    span.className = 'text-sm font-bold leading-6 text-[#1463FF]';
    span.textContent = 'COLLECT FORM SUBMISSIONS';
    
    const h1 = document.createElement('h1');
    h1.className = 'text-3xl font-normal md:leading-[72px] text-center text-[#0E0B3D] mt-3 md:text-5xl leading-9';
    h1.textContent = 'Get emails and messages from your HTML form';
    
    const p = document.createElement('p');
    p.className = 'text-base font-normal md:leading-9 mt-[14px] leading-6';
    p.textContent = 'Code your own HTML form and style it, then point your form to formcarry to get email notifications, upload files, block spam and integrate with other apps.';
    
    const getStartedLink = document.createElement('a');
    getStartedLink.className = 'get-started mt-20 inline-block text-xs font-normal leading-6 text-center py-[12px] px-[32px] text-[#FFFFFF] bg-[#030122] border-[1px] border-transparent rounded-[50px] hover:border-[1px] hover:border-[#030122] hover:bg-transparent hover:text-[#030122] duration-150';
    getStartedLink.href = '/';
    getStartedLink.textContent = 'Get Started';
    
    mainContent.appendChild(span);
    mainContent.appendChild(h1);
    mainContent.appendChild(p);
    mainContent.appendChild(getStartedLink);
    
    mainContainer.appendChild(mainContent);
    main.appendChild(mainContainer);
    document.body.appendChild(main);
    
    const footer = document.createElement('footer');
    footer.className = 'md:mt-[261px] md:mb-8 mt-[100px] mb-0';
    
    const footerContainer = document.createElement('div');
    footerContainer.className = 'container mx-auto';
    
    const footerContent = document.createElement('div');
    footerContent.className = 'footer mx-auto max-w-[1112px] bg-[#F7F9FC] flex flex-col gap-6 justify-between items-center p-6 rounded-xl md:flex-row';
    
    const footerText = document.createElement('p');
    footerText.textContent = 'formcarry. all rights reserved';
    
    const footerMenu = document.createElement('ul');
    footerMenu.className = 'flex justify-between items-center gap-8';
    
    const footerItems = ['Terms of Service', 'Privacy Policy'];
    footerItems.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = '/';
        a.textContent = item;
        li.appendChild(a);
        footerMenu.appendChild(li);
    });
    
    const socialLinks = document.createElement('div');
    socialLinks.className = 'flex items-center gap-6';
    
    const socialIcons = [
        {
            href: 'https://x.com',
            d: 'M23.2911 2.9507C22.4428 3.32592 21.5433 3.57234 20.6222 3.68182C21.5931 3.10119 22.3197 2.18739 22.6667 1.1107C21.7556 1.65293 20.7567 2.03293 19.7156 2.23848C19.0162 1.49024 18.0893 0.994001 17.0788 0.826911C16.0684 0.659821 15.0311 0.831251 14.1281 1.31454C13.2251 1.79783 12.5071 2.56591 12.0857 3.49936C11.6643 4.4328 11.5631 5.4793 11.7978 6.4763C9.95007 6.3837 8.14257 5.9035 6.49247 5.067C4.84247 4.2305 3.38679 3.05631 2.21998 1.6207C1.80697 2.33009 1.58993 3.13651 1.59109 3.95737C1.59109 5.5685 2.41109 6.9918 3.65776 7.8251C2.91999 7.8019 2.19846 7.6027 1.55331 7.244V7.3018C1.55353 8.3748 1.92483 9.4147 2.60425 10.2452C3.28367 11.0757 4.2294 11.6457 5.28109 11.8585C4.59622 12.0441 3.8781 12.0714 3.18109 11.9385C3.47761 12.8621 4.05554 13.6698 4.83397 14.2486C5.6124 14.8274 6.55237 15.1483 7.52217 15.1663C6.55827 15.9233 5.45462 16.4829 4.27429 16.8131C3.09396 17.1433 1.86012 17.2377 0.643311 17.0907C2.76742 18.4567 5.24008 19.1819 7.76557 19.1796C16.3133 19.1796 20.9878 12.0985 20.9878 5.9574C20.9878 5.7574 20.9822 5.5551 20.9733 5.3574C21.8832 4.6998 22.6684 3.88517 23.2922 2.95182L23.2911 2.9507Z'
        },
        {
            href: 'https://www.facebook.com',
            d: 'M12 0.888672C5.86336 0.888672 0.888916 5.86312 0.888916 11.9998C0.888916 17.5453 4.95225 22.142 10.2645 22.9764V15.2109H7.44221V11.9998H10.2645V9.552C10.2645 6.7676 11.9222 5.22978 14.4611 5.22978C15.6767 5.22978 16.9478 5.44645 16.9478 5.44645V8.1798H15.5478C14.1667 8.1798 13.7367 9.0364 13.7367 9.9153V11.9998H16.8178L16.3256 15.2109H13.7367V22.9764C19.0478 22.1431 23.1111 17.5442 23.1111 11.9998C23.1111 5.86312 18.1367 0.888672 12 0.888672Z'
        },
        {
            href: 'https://github.com',
            d: 'M12 0.888672C5.86114 0.888672 0.888918 5.86089 0.888918 11.9998C0.887658 14.3323 1.62093 16.606 2.98471 18.4983C4.34849 20.3906 6.27351 21.8054 8.48671 22.542C9.04221 22.6387 9.25001 22.3053 9.25001 22.0131C9.25001 21.7498 9.23561 20.8753 9.23561 19.9442C6.44451 20.4587 5.72225 19.2642 5.50003 18.6387C5.37447 18.3187 4.83336 17.3331 4.36114 17.0687C3.97225 16.8609 3.4167 16.3464 4.3467 16.3331C5.22225 16.3187 5.8467 17.1387 6.05561 17.472C7.05561 19.152 8.65341 18.6798 9.29111 18.3887C9.38891 17.6665 9.68001 17.1809 10 16.9031C7.52781 16.6253 4.94447 15.6665 4.94447 11.4165C4.94447 10.2076 5.37447 9.2087 6.08341 8.4298C5.97225 8.152 5.58336 7.0131 6.19451 5.48534C6.19451 5.48534 7.12451 5.19423 9.25001 6.6253C10.1545 6.3743 11.0891 6.2479 12.0278 6.2498C12.9722 6.2498 13.9167 6.3742 14.8056 6.6242C16.93 5.17978 17.8611 5.48645 17.8611 5.48645C18.4722 7.0142 18.0834 8.1531 17.9722 8.4309C18.68 9.2087 19.1111 10.1942 19.1111 11.4165C19.1111 15.6809 16.5145 16.6253 14.0422 16.9031C14.4445 17.2498 14.7922 17.9165 14.7922 18.9587C14.7922 20.4442 14.7778 21.6387 14.7778 22.0142C14.7778 22.3053 14.9867 22.652 15.5422 22.5409C17.7478 21.7962 19.6644 20.3787 21.0221 18.4877C22.3799 16.5968 23.1105 14.3277 23.1111 11.9998C23.1111 5.86089 18.1389 0.888672 12 0.888672Z'
        },
    ];
    
    socialIcons.forEach(icon => {
        const a = document.createElement('a');
        a.href = icon.href;
        a.target = '_blank';
        a.style.color = "#6C6F93"
        const svg = document.createElement('svg');
        svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        svg.setAttribute('viewBox', '0 0 24 24');
        svg.className = 'w-5 h-5 text-[#0e0b3d]';
        svg.setAttribute('width', "24");
        svg.setAttribute("height", "24");
        const path = document.createElement('path');
        path.setAttribute('fill', 'currentColor');
        path.setAttribute('d', icon.d);
        
        svg.appendChild(path);
        a.appendChild(svg);
        socialLinks.appendChild(a);
    });
    
    footerContent.appendChild(footerText);
    footerContent.appendChild(footerMenu);
    footerContent.appendChild(socialLinks);
    
    footerContainer.appendChild(footerContent);
    footer.appendChild(footerContainer);
    document.body.appendChild(footer);
});

