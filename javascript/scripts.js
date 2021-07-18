const Modal = { 
    open(){
        document
            .querySelector('.modal-overlay')
            .classList
            .add('active');

    },
    close(){
        document
            .querySelector('.modal-overlay')
            .classList
            .remove('active');
    }
}

const form = document.getElementById('form');
const enviando = document.getElementById('enviando');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;

    let data = {
      nome,
      email,
    }
    let convertData = JSON.stringify(data);
  
    localStorage.setItem('lead', convertData)
  
    let content = document.getElementById('content')    
    let enviando = document.getElementById('enviando')    
  
    let carregando = `<div class="enviando"
    style="width: 100%;
        height: 100%;  

        background-color: rgba(0,0,0, 0.7);

        position: absolute;
        top: 0;
;">
    <img 
    class="enviando-img" 
    src="../assets/giphy.gif" 
    alt=""
    style="
        position: absolute;
        width: 400px;
        left:50%;
        top:50%;
        margin-left:-240px;
        margin-top: -100px;
        border-radius: 25px;"        
    >
</div>`

    let carregado = `<div class="enviando"
    style="width: 100%;
        height: 100%;  

        background-color: rgba(0,0,0, 0.7);

        position: absolute;
        top: 0;
;">
    <img 
    class="enviando-img" 
    src="../assets/enviado.gif" 
    alt=""
    style="
        position: absolute;
        width: 400px;
        left:50%;
        top:50%;
        margin-left:-240px;
        margin-top: -100px;
        border-radius: 25px;"        
    >
</div>`

    let pronto = `<p style="font-size: 3rem; color: red; background-color: black; margin-top: 3rem;">Agradecemos o contato, em breve enviaremos instruções para o seu e-mail.</p>`;


    setTimeout(() => {
        enviando.innerHTML = carregando        
    }, 2000)
    
    setTimeout(() => {
        enviando.innerHTML = carregado
        setTimeout(() => {
            enviando.innerHTML = ''            
        }, 2000)            
    }, 4000)
      
    setTimeout(() => {
        content.innerHTML = pronto
    }, 6100)  
    
    
  
    // setTimeout(() => {
    //    content.innerHTML = pronto
    // }, 10000)

  
  })

