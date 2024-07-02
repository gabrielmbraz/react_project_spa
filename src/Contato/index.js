import './styles.css'

const Contato = () => {
   return(
      <div className='container-contato'>
         <div className="subcontainer-contato">
            <div class="map-container">
                  <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509616!2d144.95373531549808!3d-37.81627974202144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5771f9aa9c4f955!2sCafé+da+Esquina!5e0!3m2!1spt-BR!2sbr!4v1617125824536!5m2!1spt-BR!2sbr"
                        width="600"
                        height="450"
                        allowfullscreen=""
                        loading="lazy">
                  </iframe>
            </div>
            <div class="hours">
                  <h3>Horário de Funcionamento</h3>
                  <p>Segunda a Sexta: 8:00 - 20:00</p>
                  <p>Sábado: 9:00 - 18:00</p>
                  <p>Domingo: 10:00 - 16:00</p>
            </div>
            <div class="social-media">
                  <h3>Siga-nos nas Redes Sociais</h3>
                  <ul>
                     <li><a href="https://www.instagram.com/cafedaesquina" target="_blank">Instagram</a></li>
                     <li><a href="https://www.facebook.com/cafedaesquina" target="_blank">Facebook</a></li>
                     <li><a href="https://www.twitter.com/cafedaesquina" target="_blank">Twitter</a></li>
                  </ul>
            </div>
         </div>
      </div>
   )
}

export default Contato;