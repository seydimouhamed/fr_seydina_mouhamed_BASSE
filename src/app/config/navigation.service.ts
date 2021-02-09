export const navigation = [
  {
      admin : {
              id : 'admin',
              title : 'Admin',
              translate : 'NAV.ADMINS',
           //   type : 'collapsable',
              icon : 'admin' ,
              cohorte: true,
              toolbar : [
                  {
                      id : 'brief',
                      title : 'Brief',
                      // type : 'item',
                      url : '/brief'
                  },
                  {
                      id : 'rendus',
                      title : 'Rendus',
                      url : '/rendus'
                  },
                  {
                      id : 'explorer',
                      title : 'Explorer',
                      url : '/explorer'
                  },
                  {
                      id : 'parameters',
                      title : 'Parameters',
                      url : '/explorer'
                  },
                  {
                      id : 'users',
                      title : 'Users',
                      url : '/Users'
                  },
                  {
                      id : 'historique',
                      title : 'Historique',
                      url : '/histotique'
                  }
              ]
          },

      formateur :   {
              id : 'formateur',
              title : 'FORMATEUR',
              translate : 'NAV.FORMATEUR',
           //   type : 'collapsable',
              icon : 'formateur' ,
              recherche: true,
              toolbar : [
                  {
                      id : 'brief',
                      title : 'Brief',
                      // type : 'item',
                      url : '/brief'
                  },
                  {
                      id : 'rendus',
                      title : 'Rendus',
                      url : '/rendus'
                  },
                  {
                      id : 'explorer',
                      title : 'Explorer',
                      url : '/explorer'
                  },
                  {
                      id : 'users',
                      title : 'Users',
                      url : '/Users'
                  }
              ]
          },

      apprenant:  {
              id : 'apprenant',
              title : 'Apprenant',
              translate : 'NAV.APPRENANT',
           //   type : 'collapsable',
              icon : 'apprenant' ,
              cohorte: false,
              toolbar : [
                  {
                      id : 'brief',
                      title : 'Brief',
                      // type : 'item',
                      url : '/brief'
                  },
                  {
                      id : 'rendus',
                      title : 'Rendus',
                      url : '/rendus'
                  },
                  {
                      id : 'explorer',
                      title : 'Explorer',
                      url : '/explorer'
                  }
              ]
          }
  }
];
