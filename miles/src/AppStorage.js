// This structure holds all Dapp data:
// App Storage
// it is passed to all components and is declared as react top component state

var AppStorage = {
  contractAddress : "KT1 this is an address",
  accountAddress  : "tz1 this is an address",
  nbActiveMiles   : 10,
  nextExpiration  : "2020-11-01",
  milesColumns    : [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'quantity', headerName: 'Quantity', width: 200 },
    { field: 'expiration', headerName: 'Expiration', width: 200 },
  ],
  milesDemo       : [
    { id : "M0000001", expiration : "2020-06-01", quantity : 3 },
    { id : "M0000002", expiration : "2020-11-02", quantity : 4 },
    { id : "M0000003", expiration : "2020-12-02", quantity : 2 },
    { id : "M0000003", expiration : "2020-12-02", quantity : 2 },
    { id : "M0000003", expiration : "2020-12-02", quantity : 2 },
    { id : "M0000003", expiration : "2020-12-02", quantity : 2 },
    { id : "M0000003", expiration : "2020-12-02", quantity : 2 },
    { id : "M0000003", expiration : "2020-12-02", quantity : 2 },
  ],
  products        : [
    { image : "tezos-case.jpg",  title : "Tezos Phone Case", nbmiles : 5, got : false },
    { image : "archetype-mug.jpg",  title : "Archetype Mug", nbmiles : 3, got : false },
    { image : "tezos-sweats.jpg", title : "Tezos Sweat",      nbmiles : 8, got : false },
    { image : "archetype-cap.png",  title : "Archetype Cap", nbmiles : 2, got : false },
    { image : "tezos-cap.png",  title : "Tezos Cap", nbmiles : 2, got : false },
  ],
  githubUrl       : "https://github.com/edukera/completium-dapps",
  appTitle        : "Use Your Miles Before Expiration!"
}

export default AppStorage
