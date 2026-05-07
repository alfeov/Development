import './style.css'
import { initApp, handleSubmit } from './eventLogic'

// Attach Events
document.addEventListener('DOMContentLoaded', initApp)
document.querySelector('form').addEventListener('submit', handleSubmit)
