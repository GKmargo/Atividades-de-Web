const btn1 = document.getElementById("btn1");
      btn1.addEventListener("click", ()=>{
        //alert("Clicado no btn alterar componentes!");
        
        const inputName = document.getElementById("name");
        inputName.value = "Valor alterado!";

        const email = document.getElementById("email");
        email.value = "Valor alterado";

        const Website = document.getElementById("website");
        Website.value = "Valor Alterado";

        const numero = document.getElementById("number");
        numero.value = "10";

        const nascimento = document.getElementById("birthday");
        nascimento.value = "2005-07-11";

        const hora = document.getElementById("time");
        hora.value = "10:10";

        const telefone = document.getElementById("phone");
        telefone.value = "99074459";

        const azul = document.getElementById("blue");
        azul.checked = true;

        const vermelho = document.getElementById("red");
        vermelho.checked = false;

        const verde = document.getElementById("green");
        verde.checked = true;

        const sopa = document.getElementById("soup");
        sopa.checked = false;

        const carne = document.getElementById("curry")
        carne.checked = true

        const combustivel = document.getElementById("fuel")
        combustivel.value = "10"

        const progresso = document.getElementById("file")
        progresso.value = "30"

        const pizza1 = document.getElementById("pizza1")
        pizza1.value = "calabresa"

        const pizza2 = document.getElementById("pizza2")
        pizza2.value = "bacon"

        const sabor = document.getElementById("ice-cream-choice")
        sabor.value = "chocolate"

        const poema = document.getElementById("poem")
        poema.value = "Giovane eh lindo demais mano, slk."

        const cor = document.getElementById("color")
        cor.value = "#0000ff"

        const senha = document.getElementById("password")
        senha.value = "Giovane eh lindo demais mano, slk."

        const buscar = document.getElementById("search")
        buscar.value = "Xvideos"
      })

      const btn2 = document.getElementById("btn2");
      btn2.addEventListener("click", ()=>{
        //alert("Clicado no btn copiar valores!");

        const inputName = document.getElementById("name");
        const labelName = inputName.previousElementSibling;
        
        const form2 = document.getElementById("form2");
        form2.innerHTML = "";
        
        const inputEmail = document.getElementById("email");
        const labelEmail = inputEmail.previousElementSibling;

        const inputWebsite = document.getElementById("website")
        const labelWebsite = inputWebsite.previousElementSibling;

        const inputNumero = document.getElementById("number")
        const labelNumero = inputNumero.previousElementSibling

        const inputNascimento = document.getElementById("birthday")
        const labelNascimento = inputNascimento.previousElementSibling

        const inputHora = document.getElementById("time")
        const labelHora = inputHora.previousElementSibling

        const inputTelefone = document.getElementById("phone")
        const labelTelefone = inputTelefone.previousElementSibling

        const tabelaCor = document.getElementById("tabelaCor")

        const tabelaRefeicao = document.getElementById("tabelaRefeicao")

        const inputCombustivel = document.getElementById("fuel")
        const labelCombustivel = inputCombustivel.previousElementSibling

        const inputProgresso = document.getElementById("file")
        const labelProgresso = inputProgresso.previousElementSibling
       
        const pizza1 = document.getElementById("pizza1")
        const labelPizza = pizza1.previousElementSibling
        const pizza2 = document.getElementById("pizza2")

        const sabor = document.getElementById("ice-cream-choice")
        const labelSabor = sabor.previousElementSibling

        const inputPoema = document.getElementById("poem")
        const labelPoema = inputPoema.previousElementSibling

        const inputCor = document.getElementById("color")
        const labelCor = inputCor.previousElementSibling

        const inputArquivo = document.getElementById("resume")
        const labelArquivo = inputArquivo.previousElementSibling

        const inputSenha = document.getElementById("password")
        const labelSenha = inputSenha.previousElementSibling

        const barra = document.getElementById("range")

        const inputBuscar = document.getElementById("search")
        const labelBuscar = inputBuscar.previousElementSibling

        const resetar = document.getElementById("reset")

        const inputButton = document.getElementById("button1")

        const myfood = document.getElementById("image1")

        const inputSubmit = document.getElementById("submit1")

        const buttonSubmit = document.getElementById("submit2")

        form2.appendChild(labelName.cloneNode(true));
        form2.appendChild(inputName.cloneNode(true));
        
        form2.appendChild(labelEmail.cloneNode(true));
        form2.appendChild(inputEmail.cloneNode(true));

        form2.appendChild(labelWebsite.cloneNode(true));
        form2.appendChild(inputWebsite.cloneNode(true));

        form2.appendChild(labelNumero.cloneNode(true));
        form2.appendChild(inputNumero.cloneNode(true));

        form2.appendChild(labelNascimento.cloneNode(true));
        form2.appendChild(inputNascimento.cloneNode(true));

        form2.appendChild(labelHora.cloneNode(true));
        form2.appendChild(inputHora.cloneNode(true));
        
        form2.appendChild(labelTelefone.cloneNode(true));
        form2.appendChild(inputTelefone.cloneNode(true));

        form2.appendChild(tabelaCor.cloneNode(true));

        form2.appendChild(tabelaRefeicao.cloneNode(true));

        form2.appendChild(labelCombustivel.cloneNode(true));
        form2.appendChild(inputCombustivel.cloneNode(true));

        form2.appendChild(labelProgresso.cloneNode(true));
        form2.appendChild(inputProgresso.cloneNode(true));

        form2.appendChild(labelPizza.cloneNode(true));
        form2.appendChild(pizza1.cloneNode(true));
        form2.appendChild(pizza2.cloneNode(true));

        form2.appendChild(labelSabor.cloneNode(true));
        form2.appendChild(sabor.cloneNode(true));

        form2.appendChild(labelPoema.cloneNode(true));
        form2.appendChild(inputPoema.cloneNode(true));

        form2.appendChild(labelCor.cloneNode(true));
        form2.appendChild(inputCor.cloneNode(true));

        form2.appendChild(labelArquivo.cloneNode(true));
        form2.appendChild(inputArquivo.cloneNode(true));

        form2.appendChild(labelSenha.cloneNode(true));
        form2.appendChild(inputSenha.cloneNode(true));

        form2.appendChild(barra.cloneNode(true));

        form2.appendChild(labelBuscar.cloneNode(true));
        form2.appendChild(inputBuscar.cloneNode(true));

        form2.appendChild(resetar.cloneNode(true));

        form2.appendChild(inputButton.cloneNode(true));

        form2.appendChild(myfood.cloneNode(true));

        form2.appendChild(inputSubmit.cloneNode(true));

        form2.appendChild(buttonSubmit.cloneNode(true));
      })

      const btn3 = document.getElementById("btn3");
      btn3.addEventListener("click", ()=>{
        //alert("Clicado no btn criar componentes!");

        const form3 = document.getElementById("form3");
        form3.innerHTML = "";

       const lblName = document.createElement("label");
       lblName.textContent = "Label nome criada";
       form3.appendChild(lblName);

       const inputName = document.createElement("input");
       form3.appendChild(inputName);

       const labelEmail = document.createElement("label");
       labelEmail.textContent = "label Email criada";
       form3.appendChild(labelEmail);

       const inputEmail = document.createElement("input");
       form3.appendChild(inputEmail);

       const labelWebsite = document.createElement("label")
       labelWebsite.textContent = "label Website criada"
       form3.appendChild(labelWebsite)

       const inputWebsite = document.createElement("input")
       form3.appendChild(inputWebsite)

      const lableNumero = document.createElement("label")
      lableNumero.textContent = "label Numero criada"
      form3.appendChild(lableNumero)

      const inputNumero = document.createElement("input")
      inputNumero.type = "number"
      form3.appendChild(inputNumero)

      const lableData = document.createElement("lable")
      lableData.textContent = "Lable Nascimento criada"
      form3.appendChild(lableData)

      const inputData = document.createElement("input")
      inputData.type = "date"
      form3.appendChild(inputData)

      const lableHora = document.createElement("lable")
      lableHora.textContent = "Lable Hora criada"
      form3.appendChild(lableHora)

      const inputHora = document.createElement("input")
      inputHora.type = "time"
      form3.appendChild(inputHora)

      const lableTelefone = document.createElement("lable")
      lableTelefone.textContent = "Lable Telefone criada"
      form3.appendChild(lableTelefone)

      const inputTelefone = document.createElement("input")
      form3.appendChild(inputTelefone)

      const labelSelect = document.createElement("label");
labelSelect.textContent = "Selecione uma ou mais cores";
form3.appendChild(labelSelect);

const selectColors = document.createElement("select");
selectColors.multiple = true; // This line allows multiple selections

const option1 = document.createElement("option");
option1.value = "red";
option1.text = "Red";
selectColors.appendChild(option1);

const option2 = document.createElement("option");
option2.value = "green";
option2.text = "Green";
selectColors.appendChild(option2);

const option3 = document.createElement("option");
option3.value = "blue";
option3.text = "Blue";
selectColors.appendChild(option3);

form3.appendChild(selectColors);


      })
