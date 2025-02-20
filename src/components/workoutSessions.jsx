import React from "react";

const LadiesWorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1> TOP WORKOUT SESSIONS FOR LADIES</h1>
        <p>
          Empower Yourself & Stay Fit!<br />
          Join our women-focused workout sessions designed to enhance strength, flexibility, and overall well-being.  </p>
        <img src="/img9.jpg" alt="ladies workout" />
      </div>

      <div className="wrapper">
        <h1> FEATURED FITNESS PROGRAMS</h1>
        <p>
          Stay active, strong, and confident with our specialized training programs for women.
        </p>

        <div className="bootcamps">
          <div>
            <h4>Women's Strength & Toning (Oct 10-20)</h4>
            <p>
               <strong>Build Lean Muscle:</strong> Strengthen and tone your body with guided resistance training. <br />
               <strong>Core & Balance:</strong> Improve stability and posture with targeted core workouts. <br />
               Join now & feel stronger every day!
            </p>
          </div>

          <div>
            <h4> Sunrise Yoga & Mindfulness (Oct 12-22)</h4>
            <p>
              Start your day with relaxing yoga sessions. Improve flexibility, reduce stress, and boost inner peace in a serene environment.
            </p>
          </div>

          <div>
            <h4> Dance Fitness (Oct 15-25)</h4>
            <p>
              Burn calories the fun way! Join our dance-based fitness program, including Zumba and aerobics, for an energetic workout experience.
            </p>
          </div>

          <div>
            <h4> Self-Defense & Functional Training (Oct 20-30)</h4>
            <p>
              Learn practical self-defense techniques combined with functional fitness exercises to boost confidence, strength, and agility.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LadiesWorkoutSessions;
