// UserForm.tsx

import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';

interface FormValues {
  section: string;
  indicator: string;
  definition: string;
  unitCode: string;
  unit: string;
  choices: string;
  value: string;
  notAvailable: string;
  currentComments: string;
  newComment: string;
  conditionalityRule: string;
}

const UserForm: React.FC = () => {
  const [formData, setFormData] = useState<FormValues>({
    section: '',
    indicator: '',
    definition: '',
    unitCode: '',
    unit: '',
    choices: '',
    value: '',
    notAvailable: '',
    currentComments: '',
    newComment: '',
    conditionalityRule: '',
  });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await axios.post('/submitForm', formData); 
      alert('Form submitted successfully!');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred while submitting the form. Please try again.');
    }
  };

  return (
    <div>
      <h2>User Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Section:</label>
          <input type="text" name="section" value={formData.section} onChange={handleInputChange} />
        </div>
        <div>
          <label>Indicator :</label>
          <input type="text" name="indicator" value={formData.indicator} onChange={handleInputChange} />
        </div>
        <div>
          <label>Definition:</label>
          <input type="text" name="definition" value={formData.definition} onChange={handleInputChange} />
        </div>
        <div>
          <label>UnitCode:</label>
          <input type="text" name="unitCode" value={formData.unitCode} onChange={handleInputChange} />
        </div>
        <div>
          <label>Unit:</label>
          <input type="text" name="unit" value={formData.unit} onChange={handleInputChange} />
        </div>
        <div>
          <label>Choices:</label>
          <input type="text" name="choices" value={formData.choices} onChange={handleInputChange} />
        </div>
        <div>
          <label>Value:</label>
          <input type="text" name="value" value={formData.value} onChange={handleInputChange} />
        </div>
        <div>
          <label>Not Available:</label>
          <input type="text" name="notAvailable" value={formData.notAvailable} onChange={handleInputChange} />
        </div>
        <div>
          <label>Current Comments:</label>
          <input type="text" name="currentComments" value={formData.currentComments} onChange={handleInputChange} />
        </div>
        <div>
          <label>New Comment:</label>
          <input type="text" name="newComment" value={formData.newComment} onChange={handleInputChange} />
        </div>
        <div>
          <label>Conditionality Rule:</label>
          <input type="text" name="conditionalityRule" value={formData.conditionalityRule} onChange={handleInputChange} />
        </div>
        
        
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UserForm;
