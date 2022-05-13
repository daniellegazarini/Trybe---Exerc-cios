let peca = 'REI';
peca=peca.toLowerCase();

if (peca==='rei') {
  console.log('horizontal, vertical e diagonal');
} else {
  if (peca==='rainha') {
    console.log('horizontal, vertical e diagonal');
  } else {
    if (peca==='bispo') {
      console.log('diagonal');
    } else {
      if (peca==='cavalo') {
        console.log('em L');
      } else {
        if (peca==='torre') {
          console.log('horizontal, vertical');
        } else {
          if (peca==='peao') {
            console.log('frente');
          } else {
            console.log('erro');
          }
        }
      }
    }
  }
}

