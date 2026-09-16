import { Link, useParams } from "react-router-dom";
import doctors from "../data/doctors";

function DoctorDetails() {
  const { id } = useParams();

  const doctor = doctors.find(
    (doctor) => doctor.id === Number(id)
  );

  if (!doctor) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-3">
            Doctor Not Found
          </h1>

          <Link
            to="/doctors"
            className="text-blue-600 font-semibold"
          >
            Back to Doctors
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 py-16">
      <div className="max-w-5xl mx-auto px-6">

        {/* Back */}
        <Link
          to="/doctors"
          className="inline-flex items-center text-blue-600 font-semibold mb-8 hover:text-blue-800"
        >
          ← Back to Doctors
        </Link>

        {/* Doctor Card */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden">

          <div className="grid md:grid-cols-2">

            {/* Image */}
            <div className="bg-blue-50 p-8 flex items-center justify-center">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-full max-w-md h-96 object-cover rounded-2xl"
              />
            </div>

            {/* Information */}
            <div className="p-8 md:p-12">

              <p className="text-blue-600 font-semibold mb-3">
                {doctor.specialty}
              </p>

              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                {doctor.name}
              </h1>

              <div className="space-y-5 text-gray-600">

                <div>
                  <p className="text-sm text-gray-400">
                    Rating
                  </p>

                  <p className="font-semibold text-gray-900">
                    ⭐ {doctor.rating} / 5
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-400">
                    Experience
                  </p>

                  <p className="font-semibold text-gray-900">
                    {doctor.experience}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-400">
                    Location
                  </p>

                  <p className="font-semibold text-gray-900">
                    📍 {doctor.location}
                  </p>
                </div>

              </div>

              <Link
                to={`/book-appointment?doctorId=${doctor.id}`}
                className="block text-center mt-10 bg-blue-600 hover:bg-blue-700 text-white py-3.5 rounded-xl font-semibold transition"
              >
                Book Appointment
              </Link>

            </div>

          </div>

        </div>
      </div>
    </main>
  );
}

export default DoctorDetails;