/**
 * DisponibilitaController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

//  _config: {
//    actions: true,
//      shortcuts: true,
//      rest: true
//  },

  getMia: function (req, res) {  // prova GET Disponibilita
      Disponibilita.find()
      .populate('IdRistorante') // join con Ristoranti
      .exec(function (err, disp) {
          if (err) {
              return res.json(err);
          }
          for (var i = 0; i < disp.length; i++) {
              console.log(disp[i]);
          }
        return res.json(disp);
      })
  },
//----------------------------------------------------------------------------
  get_by_IdRistorante: function (req, res) { // GET disponibilita?IdRistorante=ID
      var IdR = req.param('IdRistorante');
      console.log(NomeRis);
      Disponibilita.find({ where: { IdRistorante: IdR } })
      .populate('IdRistorante')
      .exec(function (err, disp) {
          if (err) {
              return res.json(err);
          }
          for (var i = 0; i < disp.length; i++) {
              console.log(disp[i]);
          }
        return res.json(disp);
      })
  },
//-----------------------------------------------------------------------
  get_by_NomeRis: async function(req, res) { // GET disponibilita?Nome=NOME
     var IdR='0';
     var NomeRis = req.param('Nome');
     console.log(NomeRis);
     rist = await Ristoranti.find();
     for(i=0; i<rist.length; i++){
          if (rist[i].Nome == NomeRis)
          {
              console.log(rist[i].Nome);
              console.log(rist[i]);
              IdR = rist[i].id;
              break;
          }
      }
     console.log(IdR);
     Disponibilita.find({ where: { IdRistorante: IdR } })
      .populate('IdRistorante')
      .exec(function (err, disp) {
          if (err) {
              return res.json(err);
          }
          for (var i = 0; i < disp.length; i++) {
              console.log(disp[i]);
          }
        return res.json(disp);
      })
  },
// ------------------------------------------------------------------------
  baseDisp: (req, res) => { // prova view(Disponibilita Join Ristoranti)
      Disponibilita.find()
      .populate('IdRistorante')
      .exec( (err, r_disp) => {
          return res.view('disp',{disp: r_disp});
      });
  }
};
