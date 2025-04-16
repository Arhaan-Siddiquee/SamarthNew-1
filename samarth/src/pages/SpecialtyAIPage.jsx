import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Cpu,
    Search,
    Activity,
    Plus,
    ThumbsUp,
    AlertTriangle,
    CheckCircle,
    XCircle,
    Loader2,
    Heart,
    BrainCircuit,
    Stethoscope,
    Microscope,
    Dna,
    HeartPulse,
} from 'lucide-react';
//import { Button } from '@/components/ui/button'; // Removed - Using standard HTML button
//import { Input } from '@/components/ui/input';     // Removed - Using standard HTML input
//import { Textarea } from '@/components/ui/textarea'; // Removed - Using standard HTML textarea
//import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'; //Removed
//import { cn } from '@/lib/utils';  // Removed - Using standard classname management
//import { ScrollArea } from "@/components/ui/scroll-area" //Removed

// Placeholder for Gemini API (Replace with actual API call)
const getAIDiagnosis = async (symptoms) => {
    // Simulate API call delay and response
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Simulate different responses based on symptoms
    const symptomString = symptoms.join(', ').toLowerCase();

    if (symptomString.includes('fever') && symptomString.includes('cough')) {
        return {
            diagnosis: "Based on your symptoms, you might have a respiratory infection like the flu or a cold. It could also be COVID-19. Further testing is recommended.",
            remedies: [
                "Get plenty of rest.",
                "Drink fluids to stay hydrated.",
                "Consider over-the-counter medications for fever and pain.",
                "If symptoms worsen, consult a doctor for possible testing and treatment."
            ]
        };
    } else if (symptomString.includes('headache') && symptomString.includes('fatigue')) {
        return {
            diagnosis: "You could be experiencing a migraine, tension headache, or simply be dehydrated and tired.  Consider getting some rest and drinking plenty of water.",
            remedies: [
                "Rest in a quiet, dark room.",
                "Apply a cold or warm compress to your head or neck.",
                "Drink plenty of water.",
                "Take over-the-counter pain relievers as directed.",
                "If headaches are severe or frequent, consult a doctor."
            ]
        };
    } else if (symptomString.includes('chest pain') && symptomString.includes('shortness of breath')) {
        return {
            diagnosis: "These are serious symptoms that could indicate a heart condition or a lung problem.  Seek immediate medical attention.",
            remedies: [
                "Call emergency services immediately.",
                "Do not attempt to self-treat.",
                "Follow the instructions of medical professionals."
            ]
        };
    } else if (symptomString.includes('stomach pain') && symptomString.includes('nausea')) {
        return {
            diagnosis: "You might have a stomach bug, food poisoning, or indigestion. Try to stay hydrated and eat bland foods. If the pain is severe, consult a doctor.",
            remedies: [
                "Drink clear fluids like water or electrolyte drinks.",
                "Eat bland foods such as crackers or toast.",
                "Avoid fatty, fried, or spicy foods.",
                "Get plenty of rest.",
                "If pain is severe or symptoms worsen, consult a doctor."
            ]
        };
    } else if (symptomString.includes('rash') && symptomString.includes('itching')) {
        return {
            diagnosis: "This could be an allergic reaction, eczema, or another skin condition. Consider using an antihistamine or consulting a dermatologist if it persists.",
            remedies: [
                "Avoid scratching the rash.",
                "Apply a cold compress or take a cool bath.",
                "Use over-the-counter antihistamines or topical creams as directed.",
                "If the rash is severe or widespread, consult a dermatologist."
            ]
        };
    }
    else {
        return {
            diagnosis: "Based on the symptoms you've provided, it's difficult to give a precise diagnosis.  It could be a variety of conditions.  Please consult a healthcare professional for proper evaluation.",
            remedies: [
                "Consult a healthcare professional for a proper examination and diagnosis.",
                "Describe your symptoms in detail to your doctor.",
                "Follow your doctor's recommendations for treatment and follow-up."
            ]
        };
    }
};

const SpecialtyAIPage = () => {
    const [symptoms, setSymptoms] = useState([]);
    const [newSymptom, setNewSymptom] = useState('');
    const [diagnosis, setDiagnosis] = useState('');
    const [remedies, setRemedies] = useState([]);  // Added state for remedies
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [showDisclaimer, setShowDisclaimer] = useState(true);
    const [disclaimerAccepted, setDisclaimerAccepted] = useState(false);

    const commonSymptoms = [
        'Fever', 'Headache', 'Fatigue', 'Cough',
        'Muscle Pain', 'Sore Throat', 'Nausea', 'Dizziness',
        'Shortness of Breath', 'Chest Pain', 'Stomach Pain',
        'Rash', 'Itching', 'Swelling', 'Runny Nose', 'Loss of Smell',
        'Loss of Taste', 'Chills', 'Sweating', 'Back Pain'
    ];

    useEffect(() => {
        const savedSymptoms = localStorage.getItem('aiSymptomCheckerSymptoms');
        const savedDiagnosis = localStorage.getItem('aiSymptomCheckerDiagnosis');
        const savedRemedies = localStorage.getItem('aiSymptomCheckerRemedies'); //Load Remedies
        const savedDisclaimer = localStorage.getItem('aiSymptomCheckerDisclaimer');

        if (savedSymptoms) {
            setSymptoms(JSON.parse(savedSymptoms));
        }
        if (savedDiagnosis) {
            setDiagnosis(savedDiagnosis);
        }
        if (savedRemedies) {
            setRemedies(JSON.parse(savedRemedies));
        }
        if (savedDisclaimer) {
            setDisclaimerAccepted(JSON.parse(savedDisclaimer));
            setShowDisclaimer(false);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('aiSymptomCheckerSymptoms', JSON.stringify(symptoms));
        localStorage.setItem('aiSymptomCheckerDiagnosis', diagnosis);
        localStorage.setItem('aiSymptomCheckerRemedies', JSON.stringify(remedies)); //save remedies
        localStorage.setItem('aiSymptomCheckerDisclaimer', JSON.stringify(disclaimerAccepted));
    }, [symptoms, diagnosis, remedies, disclaimerAccepted]);

    const addSymptom = () => {
        if (newSymptom && !symptoms.includes(newSymptom)) {
            setSymptoms([...symptoms, newSymptom]);
            setNewSymptom('');
        }
    };

    const handleGetDiagnosis = async () => {
        if (symptoms.length === 0) {
            setError('Please select at least one symptom.');
            return;
        }

        setLoading(true);
        setError(null);
        setDiagnosis('');
        setRemedies([]); // Clear previous remedies
        try {
            const aiResponse = await getAIDiagnosis(symptoms);
            setDiagnosis(aiResponse.diagnosis);
            setRemedies(aiResponse.remedies); // Store remedies
        } catch (err) {
            setError(err.message || 'An error occurred while getting the diagnosis.');
        } finally {
            setLoading(false);
        }
    };

    const removeSymptom = (symptom) => {
        setSymptoms(symptoms.filter(s => s !== symptom));
    };

    const clearSymptoms = () => {
        setSymptoms([]);
        setDiagnosis('');
        setRemedies([]); // Clear remedies
    };

    const renderSymptomIcon = (symptom) => {
        symptom = symptom.toLowerCase();
        if (symptom.includes('fever')) return <Heart className="w-4 h-4 text-red-500" />;
        if (symptom.includes('headache')) return <BrainCircuit className="w-4 h-4 text-yellow-500" />;
        if (symptom.includes('cough')) return <Cpu className="w-4 h-4 text-gray-500" />;
        if (symptom.includes('pain')) return <Activity className="w-4 h-4 text-purple-500" />;
        if (symptom.includes('throat')) return <Stethoscope className="w-4 h-4 text-blue-500" />;
        if (symptom.includes('nausea')) return <Microscope className="w-4 h-4 text-green-500" />;
        if (symptom.includes('dizziness')) return <Dna className="w-4 h-4 text-pink-500" />;
        if (symptom.includes('breath')) return <HeartPulse className="w-4 h-4 text-orange-500" />;
        return <Search className="w-4 h-4 text-gray-500" />;
    };

    const handleDisclaimerAccept = () => {
        setDisclaimerAccepted(true);
        setShowDisclaimer(false);
    };

    if (showDisclaimer && !disclaimerAccepted) {
        return (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
                <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl">
                    <div className="p-6">
                        <h2 className="text-2xl font-bold text-center text-purple-600">
                            Disclaimer
                        </h2>
                        <p className="text-gray-700 text-center">
                            Important Information - Please Read Carefully
                        </p>
                    </div>
                    <div className="p-6">
                        <div className="h-48 pr-4 overflow-y-auto">
                            <p className="text-sm text-gray-800">
                                The AI Symptom Checker is for informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition. Never disregard professional medical advice or delay in seeking it because of something you have read on this application.
                            </p>
                            <br />
                            <p className="text-sm text-gray-800">
                                The AI Symptom Checker provides general information and is not intended to diagnose or treat any specific medical condition. The information provided is based on the symptoms you enter and may not be accurate or complete. Do not use this application to self-diagnose or self-treat any medical condition.
                            </p>
                            <br />
                            <p className="text-sm text-gray-800">
                                By using the AI Symptom Checker, you acknowledge that you have read and understood this disclaimer and that you agree to be bound by its terms. If you do not agree to these terms, you should not use this application.
                            </p>
                            <br />
                            <p className="text-sm text-gray-800 font-bold">
                                If you think you may have a medical emergency, call your doctor or your local emergency number immediately.
                            </p>
                        </div>
                        <div className="mt-6 flex justify-end">
                            <button
                                onClick={handleDisclaimerAccept}
                                className="bg-purple-600 text-white px-6 py-2 rounded-lg"
                            >
                                I Understand and Agree
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-purple-50 p-8 flex items-center justify-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="max-w-3xl w-full bg-white rounded-3xl shadow-2xl p-8"
            >
                <h1 className="text-4xl font-bold text-center mb-8 text-purple-600">
                    AI <span className="text-gray-800">Symptom Checker</span>
                </h1>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <motion.div
                        whileHover={{ scale: 1.03 }}
                        className="bg-purple-100 p-6 rounded-xl flex items-center space-x-4 transition-transform"
                    >
                        <Cpu className="w-12 h-12 text-purple-600" />
                        <div>
                            <h3 className="text-xl font-semibold">AI Analysis</h3>
                            <p className="text-gray-700">Intelligent symptom evaluation</p>
                        </div>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.03 }}
                        className="bg-blue-100 p-6 rounded-xl flex items-center space-x-4 transition-transform"
                    >
                        <Activity className="w-12 h-12 text-blue-600" />
                        <div>
                            <h3 className="text-xl font-semibold">Precise Tracking</h3>
                            <p className="text-gray-700">Detailed symptom monitoring</p>
                        </div>
                    </motion.div>
                </div>

                <div className="mb-6">
                    <div className="flex space-x-2 mb-4">
                        <input
                            type="text"
                            value={newSymptom}
                            onChange={(e) => setNewSymptom(e.target.value)}
                            placeholder="Enter your symptoms"
                            className="flex-grow p-3 border rounded-lg"
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    addSymptom();
                                }
                            }}
                        />
                        <motion.button
                            whileTap={{ scale: 0.95 }}
                            onClick={addSymptom}
                            className="bg-purple-600 text-white p-3 rounded-lg flex items-center"
                            title="Add Symptom"
                        >
                            <Plus className="w-5 h-5" />
                        </motion.button>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                        {commonSymptoms.map((symptom) => (
                            <motion.button
                                key={symptom}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => !symptoms.includes(symptom) && setSymptoms([...symptoms, symptom])}
                                className={symptoms.includes(symptom)
                                    ? "px-3 py-1 rounded-full text-sm bg-purple-400 text-white"
                                    : "px-3 py-1 rounded-full text-sm bg-gray-200 text-gray-700 hover:bg-purple-200"
                                }
                            >
                                {renderSymptomIcon(symptom)}
                                <span className="ml-1">{symptom}</span>
                            </motion.button>
                        ))}
                    </div>

                    {symptoms.length > 0 && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="bg-gray-100 p-4 rounded-lg"
                        >
                            <h3 className="font-semibold mb-2 flex items-center">
                                <Search className="w-5 h-5 mr-2 text-purple-600" />
                                Your Symptoms:
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                <AnimatePresence>
                                    {symptoms.map((symptom) => (
                                        <motion.div
                                            key={symptom}
                                            initial={{ opacity: 0, x: -20, scale: 0.8 }}
                                            animate={{ opacity: 1, x: 0, scale: 1 }}
                                            exit={{ opacity: 0, x: 20, scale: 0.8 }}
                                            transition={{ duration: 0.2 }}
                                            className="bg-purple-200 px-3 py-1 rounded-full text-sm flex items-center"
                                        >
                                            {renderSymptomIcon(symptom)}
                                            <span className="ml-1">{symptom}</span>
                                            <button
                                                onClick={() => removeSymptom(symptom)}
                                                className="ml-2 text-red-600"
                                                title="Remove Symptom"
                                            >
                                                <XCircle className="w-4 h-4" />
                                            </button>
                                        </motion.div>
                                    ))}
                                </AnimatePresence>
                            </div>
                            <div className="mt-4 flex justify-end">
                                <button
                                    onClick={clearSymptoms}
                                    className="text-gray-700 hover:bg-gray-200 border rounded-md px-3 py-1"
                                >
                                    Clear All
                                </button>
                            </div>
                        </motion.div>
                    )}
                </div>

                <div className="mb-6">
                    <button
                        onClick={handleGetDiagnosis}
                        className={loading
                            ? "w-full py-4 rounded-xl flex items-center justify-center space-x-2 bg-gray-400 text-white"
                            : "w-full py-4 rounded-xl flex items-center justify-center space-x-2 bg-purple-600 text-white hover:bg-purple-700"
                        }
                        disabled={loading}
                    >
                        {loading ? (
                            <>
                                <Loader2 className="animate-spin w-5 h-5" />
                                <span>Analyzing...</span>
                            </>
                        ) : (
                            <>
                                <ThumbsUp />
                                <span>Get AI Diagnosis</span>
                            </>
                        )}
                    </button>
                </div>

                {error && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
                        <AlertTriangle className="h-5 w-5 inline-block mr-2" />
                        <span className="block sm:inline">{error}</span>
                    </div>
                )}

                {diagnosis && (
                    <div className="bg-green-50 border border-green-200 rounded-lg">
                        <div className="p-4">
                            <h2 className="text-green-700 flex items-center">
                                <CheckCircle className="w-6 h-6 mr-2" />
                                AI Diagnosis:
                            </h2>
                            <p className="mt-2 text-gray-800 font-medium">{diagnosis}</p> {/* Display diagnosis */}
                        </div>
                        {remedies.length > 0 && (
                            <div className="p-4 border-t border-green-200">
                                <h3 className="text-blue-700 font-semibold mb-2">Recommended Remedies:</h3>
                                <ul className="list-disc list-inside space-y-1 text-gray-700">
                                    {remedies.map((remedy, index) => (
                                        <li key={index}>{remedy}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                        <div className="p-4">
                            <p className="mt-4 text-sm text-gray-600">
                                <span className="font-bold">Disclaimer:</span> This is an AI-generated diagnosis. It is for informational purposes only and is not a substitute for professional medical advice. Please consult a healthcare provider for any health concerns.
                            </p>
                        </div>
                    </div>
                )}
            </motion.div>
        </div>
    );
};

export default SpecialtyAIPage;
