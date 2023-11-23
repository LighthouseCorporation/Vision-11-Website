import { Dispatch, SetStateAction, useState } from "react";

type InputFormProps = {
    modalVisible: boolean,
    setModalVisible: Dispatch<SetStateAction<boolean>>,
}

const InputForm = ({ modalVisible, setModalVisible }: InputFormProps) => {
    const [name, setName] = useState<string>("")
    const [phone, setPhone] = useState<string>("")
    const [selectedService, setSelectedService] = useState<string>("")
    const [submitted, setSubmitted] = useState<boolean>(false)

    function handleSubmit(){
        if (name && phone) {
            setSubmitted(true)
        } else {
            alert("All fields are required")
        }
    }
    
    function handleServiceSelect(e: React.ChangeEvent<HTMLSelectElement>){
        console.log(selectedService)
        setSelectedService(e.target.value)
    }
    
    return (
        <>
            {
                modalVisible && (
                    <div className="overlay">
                        <div className="modal" onClick={() => { }}>
                            <div className="box dark:bg-gray-dark" id="box">
                                <div className="form dark:bg-gray-dark">
                                    <h2 className="absolute top-4 right-8 cursor-pointer p-4" onClick={() => setModalVisible(false)}>X</h2>
                                    <h2 className="text-black dark:text-white">Vision 11</h2>
                                    {
                                        submitted ? (
                                            <div className="submitted" id="submitted">
                                                <h4>Your request is now being processed. We&apos;ll be in-touch shortly</h4>
                                                <button onClick={() => setModalVisible(false)} className="back_to_site" id="bts">Return to site</button>
                                            </div>
                                        ) : (
                                            <form action="https://formsubmit.co/a8e59a9c3959435d8a376bc8e85ee915" method="POST"
                                            className="form_data flex flex-col items-center" id="form-data">
                                                <h4 className="text-black dark:text-white text-center text-1xl mt-1">Expression of Interest</h4>
                                                <div className="desired_service pl-3">
                                                    <p className="ds_text">What tasks would you like the system to perform?</p>
                                                    <select title="Services" id="services" name="Desired System Task" required>
                                                        <option value="Intelligent Systems">I have a task in mind</option>
                                                        <option value="Enterprise Growth Research">{"I'm open to explore"}</option>
                                                    </select>
                                                </div>
                                                <div className="input_box">
                                                    <input className="text-white dark:text-white" placeholder="Company" name="Company Name" type="text" required />
                                                    <span className="text-black dark:text-white">Company</span>
                                                    <i></i>
                                                </div>
                                                <div className="input_box">
                                                    <input className="text-white dark:text-white" placeholder="Phone number" name="Phone" type="text" required />
                                                    <span className="text-black dark:text-white">Phone number</span>
                                                    <i></i>
                                                </div>
                                                <h1 className="text-sm text-black dark:text-white pt-5 mt-2 pl-3">By Submitting, you allow Vision 11 to contact you</h1>
                                                <div className="relative w-full">
                                                    <button type="submit" className="submit_button text-black dark:text-white absolute right-0">
                                                        Submit
                                                    </button>
                                                </div>
                                            </form>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default InputForm;