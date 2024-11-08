import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent{
  public name: string = '';
  public phone: string = '';
  public bookingDate: Date | null = null;
  public message: string = '';
  public minDate: Date;
  public maxDate: Date;

  constructor() {
    this.minDate = new Date();
    this.maxDate = new Date();

    this.maxDate.setDate(this.minDate.getDate() + 30);
  }

  sendWhatsApp() {
    console.log(this.bookingDate);
    if (!this.name || !this.phone || !this.bookingDate) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    const fechaFormateada = this.bookingDate?.toLocaleDateString();
    const messageWhatsApp = `Hola, soy ${this.name}. Me gustaría agendar una cita para el ${fechaFormateada}. Mi número es ${this.phone}. ${this.message ? 'Mensaje adicional: ' + this.message : ''}`;
    const url = `https://wa.me/5215511390078?text=${encodeURIComponent(messageWhatsApp)}`;
    window.open(url, '_blank');
  }
}
