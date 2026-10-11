import './style.css'
import { initApp, handleSubmit } from './helpers'

// Attach Events
document.addEventListener('DOMContentLoaded', initApp)
document.querySelector('form').addEventListener('submit', handleSubmit)
