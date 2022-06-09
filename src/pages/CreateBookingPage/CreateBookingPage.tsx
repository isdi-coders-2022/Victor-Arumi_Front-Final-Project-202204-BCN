import CreateBookingForm from "../../components/CreateBookingForm/CreateBookingForm";

const CreateBookingPage = (): JSX.Element => {
  return (
    <div className="bg-customblue/20">
      <h2 className="text-center my-5 text-3xl">Crear reserva</h2>
      <CreateBookingForm />
    </div>
  );
};

export default CreateBookingPage;
