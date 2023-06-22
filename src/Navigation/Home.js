import React from 'react'
import "./home.css"
import first_one from "./first_one.png"
import second_one from "./second_one.png"
import third_one from "./third_one.png"
import fourth_one from "./fourth_one.png"
import fifth_one from "./fifth_one.png"
import sixth_one from "./sixth_one.png"
import {FaEnvelope,FaPhone,FaMobile} from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
const Home = () => {
  return (
    
    <div>
      <div id="upper">
      <div id="about">
      <h1>About USR</h1>
      <p id='pas'>Universal semantic representation (USR) captures the meaning expressedd by a sentence in adiscourse
        . Any sentence in any language can be represented via its USR which makes it more meaningful. It helps the user in understanding the grammatical 
        corrections better , which further translates to better language learning experience.
      </p>
      <h1>Our Project</h1>
      <p id="pas">Our project is a web application that allows user to add and import any text and generate its USR. Every sentence divided into word chunks which are editable intersentence and intra sentence connections are also shown for the benifit of the user.
      </p>
      </div>
     
     
      <img id="news" src="https://i.pinimg.com/564x/59/32/29/593229739184504afd9507cc42a9cb86.jpg" />
      </div>
      <button type="submit" id='trynow'><NavLink to="/spi" id="link">Try now</NavLink></button>
      
      <h1>Features</h1>
      <div class="container">
        <div class="box">
          <img src={first_one} id="img_in_box"></img>
       <h2>Add/Import text</h2>
       <p>Add or import text of your choice in the available languages to generate the USR.</p>
        </div>
        <div class="box">
        <img src={second_one} id="img_in_box"></img>
        <h2>Choose USR language</h2>
        <p>Choose the language of your choice to generate the USR.</p>
        </div>
        <div class="box">
        <img src={third_one} id="img_in_box"></img>
        <h2>Word Chunks</h2>
        <p>Every sentence is divided into single word chunks for better understanding through its USR.</p>
        </div>
    </div>
    <div class="container">
        <div class="box">
        <img src={fourth_one} id="img_in_box"></img>
        <h2>Sentence Cards</h2>
        <p>Every sentence is illustrated as a card comprising of all the word chunks</p>
        </div>
        <div class="box">
        <img src={fifth_one} id="img_in_box"></img>
        <h2>USR Editor</h2>
        <p>Edit word chunks or sentences using our Editor that allows you to submit revisions and corrections.</p>
        </div>
        <div class="box">
        <img src={sixth_one} id="img_in_box"></img>
        <h2>Sentence Relations</h2>
        <p>Inter and Intra sentence relations are illustrated using shapes and patterns</p>
        </div>
    </div>
    <div class="research">
      <h1>Research</h1>
      
      <div class="container2">

        <div class="box2">
       <h2>Purpose</h2>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore voluptatem veritatis ab maiores illum atque, esse, tenetur incidunt hic laudantium optio fuga quam ad! Veniam iste consectetur rem ducimus ad explicabo sunt, fuga rerum quaerat harum nostrum quidem illum ipsam veritatis recusandae perspiciatis error quo reiciendis sed! Asperiores, delectus quam.</p>
        </div>

        <div class="box2">
        <h2>Vision</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore voluptatem veritatis ab maiores illum atque, esse, tenetur incidunt hic laudantium optio fuga quam ad! Veniam iste consectetur rem ducimus ad explicabo sunt, fuga rerum quaerat harum nostrum quidem illum ipsam veritatis recusandae perspiciatis error quo reiciendis sed! Asperiores, delectus quam.</p>
        </div>

        <div class="box2">
        <h2>Mission</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore voluptatem veritatis ab maiores illum atque, esse, tenetur incidunt hic laudantium optio fuga quam ad! Veniam iste consectetur rem ducimus ad explicabo sunt, fuga rerum quaerat harum nostrum quidem illum ipsam veritatis recusandae perspiciatis error quo reiciendis sed! Asperiores, delectus quam.</p>
        </div>
        
       </div>
      </div>
      <div class="people">
        <h1>People</h1>
        <div class="container3">
            <div class="box3">
              <h3>image</h3>
            </div>
            <div class="box3">
              <h3>image</h3>
            </div>
            <div class="box3">
              <h3>image</h3>
            </div>
            <div class="box3">
              <h3>image</h3>
            </div>
        </div>
        <div class="container4">
            <div class="box4">
              <h3>Dr.soma Paul</h3>
            </div>
            <div class="box4">
              <h3>Dr.Surekha</h3>
            </div>
            <div class="box4">
              <h3>Dr.Kriti Garg</h3>
            </div>
            <div class="box4">
              <h3>Vilal Ali</h3>
            </div>
        </div>
        
      </div>
      
        <h2>Contact Us</h2>
        <div class="contactus">
        <div class="map">
        <iframe width="100%" height="200" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=520&amp;height=600&amp;hl=en&amp;q=Kohli%20centre%20on%20Intelligent%20Systems+(Kohli%20centre%20on%20Intelligent%20Systems)&amp;t=k&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/distance-area-calculator.html">measure acres/hectares on map</a></iframe>
          </div>
          <div class="map">
          <form>
            <input type="text" name='Name' placeholder='Name' id='name'></input>
            <br/>
            <input type="email" name='Email'placeholder='E-mail' id="name"></input>
            <br/>
            <input type="text" name='Message' placeholder='Address' id="address"></input>
            <br/>
            <button id="button" type='button'> Submit</button>
          </form>
        </div>
        
      </div>
      <div class="footer">
          <div class="add">
            <p>Language Technologies Research Cebtre (LTRC)<br/>1st Floor , Kohli Centre on Intelligent Systems(KCIS)<br/>International Institute if Information Technology, Hyderabad<br/>Gachibowli, Hyderabad, Telengana - 500032<br/>India</p>
          </div>
          <div class="add">
            <p><a href='mailto:itrc.office1@iiit.ac.in'><FaEnvelope class="icons"/>itrc.office1@iiit.ac.in</a><br/><br/><a href="tel:+914066531581"><FaPhone class="icons"/>+91-40-6653 1581</a><br/><br/><a href="tel:+91-4066531413"><FaMobile class="icons"/>+91-40-6653 1413</a></p>
          </div>
        </div>
    </div>
   
  )
}

export default Home
