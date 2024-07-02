import './styles.css';

const Menu = () => {
   return(
      <div className='container-menu'>
         <div className='subcontainer-item'>
            <div className='div-item-img'>
               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwDCmTSGMi78VS287eeUYS932Qe2AzSQbbbQ&s" />
            </div>
            <div className='div-item-texto'>
               <p>Café grande - R$6.00</p>
               <p>Café Médio - R$5.00</p>
               <p>Café Pequeno - R$4.00</p>
            </div>
         </div>
         <div className='subcontainer-item'>
            <div className='div-item-img'>
               <img src="https://giassi.vtexassets.com/arquivos/ids/1173299-1200-auto?v=638510927785230000&width=1200&height=auto&aspect=true" />
            </div>
            <div className='div-item-texto'>
               <p>Pão - R$4.00</p>
            </div>
         </div>
         <div className='subcontainer-item'>
            <div className='div-item-img'>
               <img src="https://www.italac.com.br/wp-content/uploads/2015/05/AF-3D-LEITE-INTEGRAL.png" />
            </div>
            <div className='div-item-texto'>
               <p>Leite - R$5.00</p>
            </div>
         </div>
         <div className='subcontainer-item'>
            <div className='div-item-img'>
               <img src="https://phygital-files.mercafacil.com/primato/uploads/produto/sonho_primato_kg_chocolate_d314fb16-9f05-499c-84e9-a04ec05c629c.png" />
            </div>
            <div className='div-item-texto'>
               <p>Sonho R1.00</p>
            </div>
         </div>
      </div>
   )
}

export default Menu;