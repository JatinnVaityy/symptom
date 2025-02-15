const template = (context) => {
  return new Promise((resolve) => {
    resolve(`
      <style>
        .symptom-image {
          max-width: 100%; 
          width: 600px; 
          height: auto;
        }
      </style>
      <div class="row align-items-center">
        <div class="col-md-5 text-center">
          <img src="https://cdn.dribbble.com/users/253306/screenshots/3809230/artboard_2x_1x.png" class="symptom-image rounded" alt="Symptom Checker Illustration">
        </div>
        <div class="col-md-6 offset-md-1">
          <h5 class="card-title">Check your symptoms</h5>
          <div class="card-text">
            <p>
              Take a short symptom assessment.
              Your results will include:
            </p>
            <ul>
              <li>Possible causes of symptoms</li>
              <li>Recommendations on what to do next</li>
            </ul>
            <p>
              <strong>About this tool</strong>
            </p>
            <ul>
              <li>Created and validated by doctors</li>
              <li>Clinically validated with patient cases</li>
            </ul>
          </div>
        </div>
      </div>
    `);
  });
};

export default template;
