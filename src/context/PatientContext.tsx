import React, { createContext, useState } from 'react';

interface Patient {
  id: string;
  name: string;
  age: number;
  condition?: string;
  // Add more patient fields as needed
}

interface PatientContextType {
  patients: Patient[];
  addPatient: (patient: Patient) => void;
  removePatient: (id: string) => void;
}

const PatientContext = createContext<PatientContextType | undefined>(undefined);

export const PatientProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [patients, setPatients] = useState<Patient[]>([]);

  const addPatient = (patient: Patient) => {
    setPatients((prev) => [...prev, patient]);
  };

  const removePatient = (id: string) => {
    setPatients((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <PatientContext.Provider value={{ patients, addPatient, removePatient }}>
      {children}
    </PatientContext.Provider>
  );
};

