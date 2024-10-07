import AppointmentForm from '../components/AppointmentForm';
import Hero from '../components/Hero';

const Appointment = () => {
  return (
    <>
      <Hero
        title='Schedule Your Appointment | Zeecare Medical Institute'
        imageUrl='./signin.png'
      />
      <AppointmentForm />
    </>
  );
};

export default Appointment;
