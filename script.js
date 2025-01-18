// Variables globales
let currentSequence = [2, 5, 8, 11, 14];
let currentRow = 1;

   function startActivity() {
    document.getElementById('initial-message-container').style.display = 'none';
    document.querySelector('.container').style.display = 'block';
    updateSequenceDisplay();
  }

// Initialisation de l'affichage
window.onload = function() {

};

// Fonction pour afficher/masquer les indices
function showHint(hintId) {
    const hint = document.getElementById(hintId);
    hint.style.display = hint.style.display === 'none' ? 'block' : 'none';
}

// Mise à jour de l'affichage de la séquence
function updateSequenceDisplay() {
    const container = document.getElementById('initialSequence');
    container.innerHTML = '';
    currentSequence.forEach((num, index) => {
        const term = document.createElement('div');
        term.className = 'term';
        term.textContent = num;
        term.title = `u${index + 1} = ${num}`;
        container.appendChild(term);
    });
}

// Vérification du prochain nombre
function checkNextNumber() {
    const input = document.getElementById('nextNumber');
    const feedback = document.getElementById('feedback1');
    const value = parseInt(input.value);
    
    if (value === 17) {
        showFeedback(feedback, "Excellent ! Vous avez bien trouvé le prochain terme de la suite.", "success");
        currentSequence.push(17);
        updateSequenceDisplay();
    } else {
        showFeedback(feedback, "Ce n'est pas correct. Observez bien comment chaque terme est obtenu à partir du précédent.", "error");
    }
}

// Vérification de l'explication
function checkExplanation() {
    const input = document.getElementById('explanation');
    const feedback = document.getElementById('feedback2');
   
}

// Vérification de la question 3
function checkFiftyNumber() {
    const input = document.getElementById('fiftyNumber');
    const feedback = document.getElementById('feedbackFiftyNumber');

}

// Vérification de la notation du 10ème terme
function checkTenthTerm() {
    const input = document.getElementById('tenthTerm');
    const feedback = document.getElementById('feedback3');
    const answer = input.value.toLowerCase().replace(/\s/g, '');
    
    if (answer === 'u10' || answer === 'u₁₀') {
        showFeedback(feedback, "Excellent ! C'est la bonne notation pour le 10ème terme en partant de u₁.", "success");
    } else {
        showFeedback(feedback, "Pas tout à fait. Pensez à utiliser la lettre u suivie de l'indice à préciser.", "error");
    }
}

// Vérification de la notation du 10ème terme en partant de u0
function checkTenthTermZero() {
    const input = document.getElementById('tenthTermZero');
    const feedback = document.getElementById('feedbackTenthTermZero');
    const answer = input.value.toLowerCase().replace(/\s/g, '');
    
     if (answer === 'u9' || answer === 'u₉') {
        showFeedback(feedback, "Excellent ! C'est la bonne notation pour le 10ème terme en partant de u₀.", "success");
    } else {
        showFeedback(feedback, "Pas tout à fait. Pensez à utiliser la lettre u suivie de l'indice à préciser. Attention car on commence à u₀", "error");
    }
}

// Vérification de l'utilisation de l'indice n
function checkIndexUse() {
    const input = document.getElementById('indexUse');
    const feedback = document.getElementById('feedbackIndexUse');
   
}

// Vérification de relation entre u_n et u_n+1
function checkRelation() {
    const input = document.getElementById('relation');
    const feedback = document.getElementById('feedbackRelation');
  
}

// Vérification de la notation
function checkNotation() {
    const input = document.getElementById('notation');
    const feedback = document.getElementById('feedbackNotation');

}
// Vérification du tableau de récurrence
function checkRecursionTable() {
    const feedback = document.getElementById('feedbackRecursionTable');
    const u1 = parseInt(document.getElementById('u1').value);
    const u2 = parseInt(document.getElementById('u2').value);
    const u3 = parseInt(document.getElementById('u3').value);
    const u4 = parseInt(document.getElementById('u4').value);
    const u5 = parseInt(document.getElementById('u5').value);
    
      if (u1 === 2 && u2 === 5 && u3 === 8 && u4 === 11 && u5 === 14 ) {
        showFeedback(feedback, "Bravo, le tableau est correct!", "success");
        document.querySelectorAll('.table-input').forEach(input => input.disabled = true);
    } else {
        showFeedback(feedback, "Vérifiez attentivement les valeurs.", "error");
    }
}

// Vérification de la formule explicite
function checkExplicitFormula() {
    const input = document.getElementById('explicitFormula');
    const feedback = document.getElementById('feedback4');
    const formula = input.value.toLowerCase().replace(/\s/g, '');
    
    const correctFormulas = ['un=2+3n','un=3n+2', 'uₙ=2+3n','uₙ=3n+2'];
    
    if (correctFormulas.includes(formula)) {
        showFeedback(feedback, "Bravo ! Vous avez trouvé la formule explicite qui permet de calculer directement n'importe quel terme !", "success");
       document.querySelectorAll('.small-input').forEach(input => input.disabled = true);
        
    } else {
        showFeedback(feedback, "Ce n'est pas la bonne formule. Essayez d'exprimer uₙ en fonction de n...", "error");
    }
}
// Vérification de la question 11
function checkFiftyNumberExplict() {
    const input = document.getElementById('fiftyNumberExplict');
    const feedback = document.getElementById('feedbackFiftyNumberExplict');
   
}
// Fonction utilitaire pour afficher les feedbacks
function showFeedback(element, message, type) {
    element.textContent = message;
    element.className = 'feedback visible ' + type;
}

// Fonction pour réinitialiser l'activité
function resetActivity() {
    currentSequence = [2, 5, 8, 11, 14];
    currentRow = 1;
    
    // Réinitialiser les inputs
    document.querySelectorAll('input, textarea').forEach(input => input.value = '');
    document.querySelectorAll('.table-input').forEach(input => input.disabled = false);
     document.querySelectorAll('.small-input').forEach(input => input.disabled = false);
     document.querySelectorAll('.small-input').forEach(input => {if (input.id !== 'val0' && input.id !== 'val1' && input.id !== 'val2' && input.id !== 'val3'&& input.id !== 'val4') {input.value = ''}});
       document.querySelectorAll('.feedback').forEach(feedback => feedback.className = 'feedback');

    // Réinitialiser les feedbacks
   
    
     // Réinitialiser le tableau de récurrence
    document.getElementById('recursionTable').innerHTML = `
         <tr>
            <th>n</th>
            <th>\(u_n\)</th>
            <th>Calcul détaillé</th>
        </tr>
        <tr>
             <td>1</td>
             <td><input type="number" id="u1" class="input-field table-input" ></td>
             <td>Premier terme (donné)</td>
        </tr>
        <tr>
             <td>2</td>
             <td><input type="number" id="u2" class="input-field table-input" ></td>
              <td>
                  <input type="text" id="calc2" class="input-field table-input" placeholder="u₁ + 3 = ...">
                  <button class="small-button" onclick="checkRecCalc(2)">✓</button>
                   <span id="feedback_calc_rec2" class="feedback"></span>
             </td>
        </tr>
         <tr>
             <td>3</td>
            <td><input type="number" id="u3" class="input-field table-input" ></td>
             <td>
                 <input type="text" id="calc3" class="input-field table-input" placeholder="u₂ + 3 = ...">
                 <button class="small-button" onclick="checkRecCalc(3)">✓</button>
                 <span id="feedback_calc_rec3" class="feedback"></span>
              </td>
         </tr>
        <tr>
             <td>4</td>
            <td><input type="number" id="u4" class="input-field table-input" ></td>
             <td>
                <input type="text" id="calc4" class="input-field table-input" placeholder="u₃ + 3 = ...">
                <button class="small-button" onclick="checkRecCalc(4)">✓</button>
                 <span id="feedback_calc_rec4" class="feedback"></span>
             </td>
        </tr>
         <tr>
             <td>5</td>
             <td><input type="number" id="u5" class="input-field table-input" ></td>
             <td>
                <input type="text" id="calc5" class="input-field table-input" placeholder="u₄ + 3 = ...">
                <button class="small-button" onclick="checkRecCalc(5)">✓</button>
                 <span id="feedback_calc_rec5" class="feedback"></span>
              </td>
        </tr>
    `;
    
     document.getElementById('explicitTable').innerHTML = `
        <tr>
            <th>n</th>
            <th>\(u_n\)</th>
            <th>Calcul détaillé</th>
        </tr>
        <tr>
           <td style="width: 80px;"><span class="indice-input">0</span></td>
           <td style="width: 150px;">\(u_0\)= <input type="number" class="small-input" id="val0" value="2" disabled style="width: 60px;"></td>
           <td style="width: 200px;">Déjà donnée dans l'énoncé</td>
       </tr>
        <tr>
            <td style="width: 80px;"><span class="indice-input">1</span></td>
            <td style="width: 150px;">\(u_1\)= <input type="number" class="small-input" id="val1" value="5" disabled style="width: 60px;"></td>
             <td style="width: 250px;">
              <input type="text" class="small-input" id="calc_ex1" placeholder="...?" style="width: 150px;">
               <button class="small-button" onclick="checkCalc(1)">✓</button>
               <span id="feedback_calc_ex1" class="feedback"></span>
             </td>
        </tr>
        <tr>
          <td style="width: 80px;"> <span class="indice-input">2</span></td>
           <td style="width: 150px;">\(u_2\)= <input type="number"  class="small-input" id="val2" value="8" disabled style="width: 60px;"></td>
             <td style="width: 250px;">
              <input type="text"  class="small-input" id="calc_ex2" placeholder="...?" style="width: 150px;">
              <button class="small-button" onclick="checkCalc(2)">✓</button>
              <span id="feedback_calc_ex2" class="feedback"></span>
           </td>
        </tr>
         <tr>
          <td style="width: 80px;"> <span class="indice-input">3</span></td>
           <td style="width: 150px;">\(u_3\)= <input type="number"  class="small-input" id="val3" value="11" disabled style="width: 60px;"></td>
            <td style="width: 250px;">
                <input type="text" class="small-input" id="calc_ex3" placeholder="...?" style="width: 150px;">
                <button class="small-button" onclick="checkCalc(3)">✓</button>
                <span id="feedback_calc_ex3" class="feedback"></span>
            </td>
        </tr>
         <tr>
            <td style="width: 80px;"><span class="indice-input">4</span></td>
            <td style="width: 150px;">\(u_4\)= <input type="number"  class="small-input" id="val4" value="14" disabled style="width: 60px;"></td>
             <td style="width: 250px;">
                <input type="text" class="small-input" id="calc_ex4" placeholder="...?" style="width: 150px;">
                <button class="small-button" onclick="checkCalc(4)">✓</button>
                <span id="feedback_calc_ex4" class="feedback"></span>
            </td>
        </tr>
     `;
    
    // Mettre à jour l'affichage
    updateSequenceDisplay();
}
       function checkCalc(index) {
    const input = document.getElementById(`calc_ex${index}`);
    const feedback = document.getElementById(`feedback_calc_ex${index}`);
    const answer = input.value.toLowerCase().replace(/\s/g, '');
    let correctAnswer;
    switch (index) {
         case 1:
            correctAnswer = "2+3*1";
            break;
        case 2:
            correctAnswer = "2+3*2";
            break;
        case 3:
            correctAnswer = "2+3*3";
            break;
        case 4:
            correctAnswer = "2+3*4";
             break;
    }
    
    if (answer === correctAnswer) {
        showFeedback(feedback, "Correct !", "success");
         input.disabled = true;

    } else {
       showFeedback(feedback, "Incorrect. Essayez encore.", "error");
    }
}
    function checkRecCalc(index) {
    const input = document.getElementById(`calc${index}`);
    const feedback = document.getElementById(`feedback_calc_rec${index}`);
     const answer = input.value.toLowerCase().replace(/\s/g, '');
    let correctAnswer;
    switch (index) {

        case 2:
            correctAnswer = "2+3=5";
            break;
        case 3:
            correctAnswer = "5+3=8";
            break;
        case 4:
            correctAnswer = "8+3=11";
             break;
        case 5:
             correctAnswer = "11+3=14";
            break;
    }
    
    if (answer === correctAnswer) {
        showFeedback(feedback, "Correct !", "success");
         input.disabled = true;

    } else {
       showFeedback(feedback, "Incorrect. Essayez encore.", "error");
    }
}