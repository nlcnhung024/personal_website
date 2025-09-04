fetch('cv-data.json')
  .then(response => response.json())
  .then(data => {
    const cv = document.getElementById('cv');
    cv.innerHTML = `
      <h1>${data.name}</h1>
      <h2>${data.title}</h2>
      <p>${data.summary}</p>

      <h3>Education</h3>
      <ul>${data.education.map(ed => `<li>${ed.degree}, ${ed.institution} (${ed.year})</li>`).join('')}</ul>

      <h3>Experience</h3>
      <ul>${data.experience.map(exp => `<li><strong>${exp.role}</strong> at ${exp.company} (${exp.duration})<br>${exp.details}</li>`).join('')}</ul>

      <h3>Skills</h3>
      <ul>${data.skills.map(skill => `<li>${skill}</li>`).join('')}</ul>
    `;
  })
  .catch(error => {
    document.getElementById('cv').innerHTML = "<p>Error loading CV data.</p>";
    console.error(error);
  });