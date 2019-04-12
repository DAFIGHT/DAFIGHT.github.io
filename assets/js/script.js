$(function(){
  var goodHpBar = $('#goodHpBar');
  var badHpBar = $('#badHpBar');
  var badName = 'devilax';
  var goodName = 'goodman';
  function damouge(dmg, hp, nom){
    var greenWidth = hp.width();
    if (greenWidth > dmg){
      greenWidth -= dmg;
    } else {
      greenWidth = 0;
      alert(nom + ' est mort !');
      if(nom == 'devilax'){
        $('#devilax').attr('src', 'assets/img/devilax_dead.png');
      } else if(nom == 'goodman'){
        $('#goodman').attr('src', 'assets/img/goodman_dead.png');
      }
    }
    $(hp).width(greenWidth);
  }
  // ATTAQUES GOODMAN
  $('#megaPunch').click(function(){
    alert('PAF');
    damouge(75, badHpBar, badName);
    $('#godSpliff').attr('disabled', false);
  });
  $('#fly').click(function(){
    alert('Ce n\'est pas très efficace');
    damouge(25, badHpBar, badName);
    $('#godSpliff').attr('disabled', false);
  });
  $('#sacredRay').click(function(){
    alert('C\'est très efficace !');
    damouge(100, badHpBar, badName);
    $('#godSpliff').attr('disabled', false);
  });
  $('#godSpliff').click(function(){
    alert('Par le pouvoir du Pétou !');
    damouge(-100, goodHpBar, badName);
    $('#godSpliff').attr('disabled', true);
  });
  // ATTAQUES DEVILAX
  $('#lick').click(function(){
    alert('PAF');
    damouge(75, goodHpBar, goodName);
  });
  $('#fireSpit').click(function(){
    alert('Ce n\'est pas très efficace');
    damouge(25, goodHpBar, goodName);
  });
  $('#tail').click(function(){
    alert('C\'est très efficace !');
    damouge(100, goodHpBar, goodName);
  });
});
