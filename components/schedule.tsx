import React from 'react';

const ScheduleCard: React.FC = () => {
  return (<>
    <div className="bg-darkBackground text-lightText min-h-screen flex items-center justify-center">
      <div className="container mx-auto p-4">
        {/* Title */}
        

        {/* Schedule Grid */}
        <div className="grid grid-cols-2 gap-12 relative">
          {/* Left Side */}
          <div className="relative">
            {/* Image for Character 1 */}
            <img
              src="/character1.png" // Path for image in the public folder
              alt="Character 1"
              width={500} // Image width
              height={500} // Image height
              className="absolute top-[563px] left-[-150px] "
            />
            <img
              src="/arrow1.png" 
              alt="Arrow 1"
              width={200}
              height={160}
              className="absolute top-[-100px] left-[200px] transition-transform duration-300 hover:scale-110"
            />
            <p className="absolute top-[10px] left-[-60px] text-white font-Orbitron font-bold text-[30px] text-center leading-tight transition-transform duration-300 hover:scale-110">
              28 & 29 January<br />
              Ideation Round<br /> 
              Begins
            </p>
            <img
              src="/flag.png" 
              alt="flag"
              width={130}
              height={120}
              className="absolute top-[-150px] left-[10px] transition-transform duration-300 hover:scale-110"
            />
            <img
              src="/arrow1.png"
              alt="Arrow 1"
              width={200}
              height={160}
              className="absolute top-[-100px] left-[625px] transition-transform duration-300 hover:scale-110"
            />
            <p className="absolute top-[10px] left-[425px] text-white font-Orbitron font-bold text-[30px] text-center leading-tight transition-transform duration-300 hover:scale-110">
              30 January<br />
              Result<br />
              Declaration
            </p>
            <img
              src="/rocket.png"
              alt="rocket"
              width={130}
              height={120}
              className="absolute top-[-150px] left-[450px] transition-transform duration-300 hover:scale-110"
            />
            <img
              src="/arrow1.png"
              alt="Arrow 1"
              width={200}
              height={160}
              className="absolute top-[-100px] left-[1050px] transition-transform duration-300 hover:scale-110"
            />
            <p className="absolute top-[10px] left-[870px] text-white font-Orbitron font-bold text-[30px] text-center leading-tight transition-transform duration-300 hover:scale-110">
              31 January<br />
              Preparation<br />
              Time
            </p>
            <img
              src="/rocket.png" 
              alt="rocket"
              width={130}
              height={120}
              className="absolute top-[-150px] left-[870px] transition-transform duration-300 hover:scale-110"
            />
            <img
              src="/arrow1.png"
              alt="Arrow 1"
              width={200}
              height={160}
              className="absolute top-[900px] left-[200px] transition-transform duration-300 hover:scale-110"
            />
            <p className="absolute top-[950px] left-[425px] text-white font-Orbitron font-bold text-[30px] text-center leading-tight transition-transform duration-300 hover:scale-110">
              2 February<br />
              Final Presentation<br />
              Round
            </p>
            <img
              src="/rocket.png" 
              alt="rocket"
              width={130}
              height={120}
              className="absolute top-[800px] left-[425px] transition-transform duration-300 hover:scale-110"
            />

            <img
              src="/arrow4.png" 
              alt="Arrow 4"
              width={120}
              height={160}
              className="absolute top-[1px] left-[1190px] transition-transform duration-300 hover:scale-110"
            />
            <img
              src="/arrow5.png" 
              alt="Arrow 5"
              width={120}
              height={160}
              className="absolute top-[150px] left-[1190px] transition-transform duration-300 hover:scale-110"
            />


            <img
              src="/arrow4.png" 
              alt="Arrow 4"
              width={120}
              height={160}
              className="absolute top-[500px] left-[100px] transition-transform duration-300 hover:scale-110"
            />
            <img
              src="/arrow5.png" 
              alt="Arrow 5"
              width={120}
              height={160}
              className="absolute top-[700px] left-[100px] transition-transform duration-300 hover:scale-110"
            />      

            <img
              src="/arrow1.png"
              alt="Arrow 1"
              width={200}
              height={160}
              className="absolute top-[900px] left-[625px] transition-transform duration-300 hover:scale-110"
            />
            <p className="absolute top-[950px] left-[870px] text-white font-Orbitron font-bold text-[30px] text-center leading-tight transition-transform duration-300 hover:scale-110">
              2 February<br />
              Winners<br />
              Declared
            </p>
            <img
              src="/flag.png" 
              alt="flag"
              width={130}
              height={120}
              className="absolute top-[800px] left-[870px] transition-transform duration-300 hover:scale-110"
            />
            <img
              src="/arrow2.png"
              alt="Arrow 2"
              width={200}
              height={160}
              className="absolute top-[300px] left-[200px] transition-transform duration-300 hover:scale-110"
            />
            <p className="absolute top-[425px] left-[425px] text-white font-Orbitron font-bold text-[28px] text-center leading-tight transition-transform duration-300 hover:scale-110">
              9:00 am - 7:00pm<br />
              1 February<br />
              10 hr offline<br />
              coding round
            </p>
            <img
              src="/rocket.png" 
              alt="rocket"
              width={130}
              height={120}
              className="absolute top-[275px] left-[450px] transition-transform duration-300 hover:scale-110"
            />
            <img
              src="/arrow2.png"
              alt="Arrow 2"
              width={200}
              height={160}
              className="absolute top-[300px] left-[625px] transition-transform duration-300 hover:scale-110"
            />
            <p
              className="absolute top-[425px] left-[870px] text-white font-Orbitron font-bold text-[28px] text-center leading-tight transition-transform duration-300 hover:scale-110"
            >
              <span>11:00 PM</span> <br />
              <span>1 February</span> <br />
              <span>Results Declared</span>
            </p>
            <img
              src="/rocket.png" 
              alt="rocket"
              width={130}
              height={120}
              className="absolute top-[275px] left-[870px] transition-transform duration-300 hover:scale-110"
            />
            <img
              src="/arrow2.png"
              alt="Arrow 2"
              width={200}
              height={160}
              className="absolute top-[300px] left-[1050px] transition-transform duration-300 hover:scale-110"
            />

            <div className="space-y-8">
              {[...Array(3)].map((_, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="bg-neonPink w-10 h-10 rounded-full flex items-center justify-center text-darkBackground font-bold transition-transform duration-300 hover:scale-110">
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side */}
          <div className="relative">
            {/* Image for Character 2 */}
            <img
              src="/character2.png" // Path for image in the public folder
              alt="Character 2"
              className="absolute top-[-500px] right-[-100px] w-200 h-200 "
            />
            <div className="space-y-8">
              {[...Array(3)].map((_, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="bg-neonBlue w-10 h-10 rounded-full flex items-center justify-center text-darkBackground font-bold transition-transform duration-300 hover:scale-110">
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default ScheduleCard;

