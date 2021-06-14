import React, { Component } from "react";
import Card from "./card";

class Content extends Component {
  state = {
    titles: [
      "Patients",
      "Doctors",
      "Diet",
      "Disease",
      "Insurance Policy",
      "Finance",
      "Patient History",
      "Patient Case",
    ],
  };
  render() {
    return ( <div class="row row-cols-1 row-cols-md-3 g-4">
    <div class="col">
      <div class="card h-60">
        <img src="https://media.istockphoto.com/vectors/running-doctor-vector-id1127712264?k=6&m=1127712264&s=612x612&w=0&h=JIxrCUl9ouU2nb3ZO4-vhhlR3r3XE0VhaYnBdrVPVY8=" class="card-img-top" 
        height="220"
        width="90"
        crop="fill"
        effect="sepia"
        radius="20"
        />
        <div class="card-body">
          <h5 class="card-title">Doctor</h5>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card h-60">
        <img src="https://www.kindpng.com/picc/m/49-496363_transparent-sick-person-png-png-download.png" 
         height="220"
         width="290"
         crop="fill"
         effect="sepia"
         radius="20"/>
        <div class="card-body">
          <h5 class="card-title">Patient</h5>
       </div>
      </div>
    </div>
    <div class="col">
      <div class="card h-60">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwbIZhHPJ6AZhc8SZv7_UI_-sqrz3NGRCKzl0MbkCTRhdNmjsnVZUi9f8DLl3XLSvXC5o&usqp=CAU" class="card-img-top" 
         height="220"
         width="90"
         crop="fill"
         effect="sepia"
         radius="20"/>
        <div class="card-body">
          <h5 class="card-title">Patient Case</h5>
     </div>
      </div>
    </div>
    <div class="col">
      <div class="card h-60">
        <img src="https://st3.depositphotos.com/17355714/31657/v/950/depositphotos_316571916-stock-illustration-medical-form-medical-report-characters.jpg" class="card-img-top" 
         height="220"
         width="90"
         crop="fill"
         effect="sepia"
         radius="20"/>
        <div class="card-body">
          <h5 class="card-title">Patient History</h5>
     </div>
      </div>
    </div>
    <div class="col">
      <div class="card h-60">
        <img src = "https://www.netclipart.com/pp/m/164-1648603_healthcare-clipart-bedridden-health-career-cartoon.png" class="card-img-top"
         height="255"
         width="90"
         crop="fill"
         effect="sepia"
         radius="20"/>
        <div class="card-body">
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card h-60">
        <img src="https://t4.ftcdn.net/jpg/02/47/19/91/360_F_247199107_3W9Clvj0lRf2z1g5wx206ybAccczNd9H.jpg" class="card-img-top" 
         height="220"
         width="90"
         crop="fill"
         effect="sepia"
         radius="20"/>
        <div class="card-body">
          <h5 class="card-title">Diet</h5>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card h-60">
        <img src="https://image.freepik.com/vetores-gratis/bacterias-dos-desenhos-animados-sob-uma-lupa_29190-3665.jpg" class="card-img-top"
         height="220"
         width="90"
         crop="fill"
         effect="sepia"
         radius="20"/>
        <div class="card-body">
          <h5 class="card-title">Disease</h5>
       </div>
      </div>
    </div>
    <div class="col">
      <div class="card h-60">
        <img src="https://www.pngitem.com/pimgs/m/246-2469426_accounting-teacher-cartoon-free-clipart-hd-clipart-accountant.png" class="card-img-top"
         height="220"
         width="90"
         crop="fill"
         effect="sepia"
         radius="20"/>
        <div class="card-body">
          <h5 class="card-title">Finance</h5>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card h-60">
        <img src="https://image.freepik.com/free-vector/injury-insurance-policy-concept-with-injured-woman-cartoon-character_181313-463.jpg" class="card-img-top" 
         height="220"
         width="90"
         crop="fill"
         effect="sepia"
         radius="20"/>
        <div class="card-body">
          <h5 class="card-title">Insurance Policy</h5>
       </div>
      </div>
    </div>
  </div>         
    );
  }
}

export default Content;