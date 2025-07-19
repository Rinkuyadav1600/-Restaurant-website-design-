 
    const profileImg = document.getElementById('profileImg');
    const profileDropdown = document.getElementById('profileDropdown');
    const logoutBtn = document.getElementById('logoutBtn');
    
   
    let isLoggedIn = true; 

    profileImg.addEventListener('click', function() {
      if (isLoggedIn) {
        profileDropdown.classList.toggle('show');
      } else {
      
        document.getElementById('loginModal').style.display = 'flex';
      }
    });

   
    window.addEventListener('click', function(e) {
      if (!e.target.matches('.profile-img') && !e.target.closest('.profile-dropdown')) {
        if (profileDropdown.classList.contains('show')) {
          profileDropdown.classList.remove('show');
        }
      }
    });

   
    logoutBtn.addEventListener('click', function(e) {
      e.preventDefault();
      isLoggedIn = false;
      profileDropdown.classList.remove('show');
      alert('You have been logged out.');
      
     
    });

   
    const loginModal = document.getElementById('loginModal');
    const signupModal = document.getElementById('signupModal');
    const closeLogin = document.getElementById('closeLogin');
    const closeSignup = document.getElementById('closeSignup');
    const showSignup = document.getElementById('showSignup');
    const showLogin = document.getElementById('showLogin');

    closeLogin.addEventListener('click', function() {
      loginModal.style.display = 'none';
    });

    closeSignup.addEventListener('click', function() {
      signupModal.style.display = 'none';
    });

    showSignup.addEventListener('click', function() {
      loginModal.style.display = 'none';
      signupModal.style.display = 'flex';
    });

    showLogin.addEventListener('click', function() {
      signupModal.style.display = 'none';
      loginModal.style.display = 'flex';
    });

   
    window.addEventListener('click', function(e) {
      if (e.target === loginModal) {
        loginModal.style.display = 'none';
      }
      if (e.target === signupModal) {
        signupModal.style.display = 'none';
      }
    });

   
    document.getElementById('loginForm').addEventListener('submit', function(e) {
      e.preventDefault();
      
      isLoggedIn = true;
      loginModal.style.display = 'none';
      alert('Login successful!');
    });

    document.getElementById('signupForm').addEventListener('submit', function(e) {
      e.preventDefault();
    
      isLoggedIn = true;
      signupModal.style.display = 'none';
      alert('Account created successfully! You are now logged in.');
    });

    
    const filterBtns = document.querySelectorAll('.filter-btn');
    const menuSections = document.querySelectorAll('.section');

    filterBtns.forEach(btn => {
      btn.addEventListener('click', function() {
        
       
        filterBtns.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        
        const category = this.dataset.category;
        
      
        menuSections.forEach(section => {
          if (category === 'all' || section.dataset.category === category) {
            section.style.display = 'flex';
          } else {
            section.style.display = 'none';

          }
        });
      });
    });

    
    if (isLoggedIn) {
      setTimeout(() => {
        profileImg.click();
      }, 1000);
    }