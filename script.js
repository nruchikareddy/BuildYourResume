document.getElementById('resume-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const summary = document.getElementById('summary').value;
    const education = Array.from(document.querySelectorAll('.education')).map(el => el.value).join('<br><br>');
    const experience = Array.from(document.querySelectorAll('.experience')).map(el => el.value).join('<br><br>');
    const skills = document.getElementById('skills').value;
    
    const resumeOutput = `
        <h2>${name}</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <h3>Summary</h3>
        <p>${summary}</p>
        <h3>Education</h3>
        <p>${education}</p>
        <h3>Experience</h3>
        <p>${experience}</p>
        <h3>Skills</h3>
        <p>${skills}</p>
    `;
    
    document.getElementById('resume-output').innerHTML = resumeOutput;
});

document.getElementById('add-education').addEventListener('click', function() {
    const container = document.getElementById('education-container');
    const newField = document.createElement('textarea');
    newField.classList.add('education');
    newField.name = 'education';
    newField.required = true;
    container.appendChild(newField);
});

document.getElementById('add-experience').addEventListener('click', function() {
    const container = document.getElementById('experience-container');
    const newField = document.createElement('textarea');
    newField.classList.add('experience');
    newField.name = 'experience';
    newField.required = true;
    container.appendChild(newField);
});

document.getElementById('download-pdf').addEventListener('click', function() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const summary = document.getElementById('summary').value;
    const education = Array.from(document.querySelectorAll('.education')).map(el => el.value).join('\n\n');
    const experience = Array.from(document.querySelectorAll('.experience')).map(el => el.value).join('\n\n');
    const skills = document.getElementById('skills').value;

    doc.text(20, 20, `${name}\n\nEmail: ${email}\nPhone: ${phone}\n\nSummary\n${summary}\n\nEducation\n${education}\n\nExperience\n${experience}\n\nSkills\n${skills}`);

    doc.save('resume.pdf');
});

document.getElementById('resume-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Retrieve selected template
    const selectedTemplate = document.getElementById('template').value;

    // Get other form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const summary = document.getElementById('summary').value;
    const education = Array.from(document.querySelectorAll('.education')).map(el => el.value).join('\n\n');
    const experience = Array.from(document.querySelectorAll('.experience')).map(el => el.value).join('\n\n');
    const skills = document.getElementById('skills').value;
    
    // Generate resume based on selected template
    const resumeOutput = generateResume(selectedTemplate, name, email, phone, summary, education, experience, skills);
    
    // Display the generated resume
    document.getElementById('resume-output').innerHTML = resumeOutput;
});

function generateResume(template, name, email, phone, summary, education, experience, skills) {
    const basicTemplate = `
        <h2>${name}</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <h3>Summary</h3>
        <p>${summary}</p>
        <h3>Education</h3>
        <p>${education}</p>
        <h3>Experience</h3>
        <p>${experience}</p>
        <h3>Skills</h3>
        <p>${skills}</p>
    `;
    
    return basicTemplate;
}
