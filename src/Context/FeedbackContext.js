import {v4 as uuidv4} from 'uuid'
import { createContext, useState } from "react";

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {

    const [feedback,setFeedback]= useState([
        {
            id:1,
            text: 'this is item first from context',
            rating: 7
        },
        {
            id:2,
            text: 'this is item second from context',
            rating: 4
        },
        {
            id:3,
            text: 'this is item third from context',
            rating: 10
        }
    ])

    const [feedbackEdit, setFeedbackEdit]=useState({
        item:{},
        edit: false
    })

    const deleteFeedback= (id)=>{
        if (window.confirm('are you sure you want to delete it')) {
         setFeedback(feedback.filter((item)=> item.id !== id ))
        }
      }
    
      const addFeedback=(newFeedback)=>{
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
      }

    const editFeedback = (item)=>{
        setFeedbackEdit({
            item,
            edit:true,
        })
    }

    const updateFeedback=(id, updItem)=>{
        setFeedback(feedback.map((item)=>(item.id === id? {...item, ...updItem}: item)))
    }
  


    return <FeedbackContext.Provider value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback,
    }}>
        {children}
    </FeedbackContext.Provider>
}
export default FeedbackContext