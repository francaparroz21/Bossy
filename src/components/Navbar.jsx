import { useState } from 'react'
import { NavLink } from "react-router-dom"
import NavItem from './Elements/NavItem'

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(-1)
  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index)
  }
  const links = [
    "Quién soy",
    "Servicios",
    "Productos",
    "Capacitaciones",
    "Preguntas Frecuentes",
    "Tips",
  ]
  const codeLinks = [
    "quien-soy",
    "servicios",
    "productos",
    "capacitaciones",
    "faq",
    "tips",
  ]
  const svgLinks = [
    <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 16H5V10H11V16H14V7L8 2.5L2 7V16ZM0 18V6L8 0L16 6V18H9V12H7V18H0Z" fill="#AA302B" />
    </svg>,
    <svg width="16" height="21" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 21L0.8 15.6C0.55 15.4167 0.354167 15.1833 0.2125 14.9C0.0708333 14.6167 0 14.3167 0 14V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H14C14.55 0 15.0208 0.195833 15.4125 0.5875C15.8042 0.979167 16 1.45 16 2V14C16 14.3167 15.9292 14.6167 15.7875 14.9C15.6458 15.1833 15.45 15.4167 15.2 15.6L8 21ZM8 18.5L14 14V2H2V14L8 18.5ZM6.95 13L12.6 7.35L11.2 5.9L6.95 10.15L4.85 8.05L3.4 9.45L6.95 13Z" fill="#AA302B" />
    </svg>,
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 20C8.78333 19.85 7.575 19.5208 6.375 19.0125C5.175 18.5042 4.10417 17.775 3.1625 16.825C2.22083 15.875 1.45833 14.675 0.875 13.225C0.291667 11.775 0 10.0333 0 8V7H1C1.85 7 2.725 7.10833 3.625 7.325C4.525 7.54167 5.36667 7.86667 6.15 8.3C6.35 6.86667 6.80417 5.39583 7.5125 3.8875C8.22083 2.37917 9.05 1.08333 10 0C10.95 1.08333 11.7792 2.37917 12.4875 3.8875C13.1958 5.39583 13.65 6.86667 13.85 8.3C14.6333 7.86667 15.475 7.54167 16.375 7.325C17.275 7.10833 18.15 7 19 7H20V8C20 10.0333 19.7083 11.775 19.125 13.225C18.5417 14.675 17.7792 15.875 16.8375 16.825C15.8958 17.775 14.8292 18.5042 13.6375 19.0125C12.4458 19.5208 11.2333 19.85 10 20ZM9.95 17.95C9.76667 15.1833 8.94583 13.0917 7.4875 11.675C6.02917 10.2583 4.21667 9.38333 2.05 9.05C2.23333 11.9 3.07917 14.025 4.5875 15.425C6.09583 16.825 7.88333 17.6667 9.95 17.95ZM10 11.6C10.25 11.2333 10.5542 10.8542 10.9125 10.4625C11.2708 10.0708 11.6167 9.73333 11.95 9.45C11.9167 8.5 11.7292 7.50833 11.3875 6.475C11.0458 5.44167 10.5833 4.43333 10 3.45C9.41667 4.43333 8.95417 5.44167 8.6125 6.475C8.27083 7.50833 8.08333 8.5 8.05 9.45C8.38333 9.73333 8.73333 10.0708 9.1 10.4625C9.46667 10.8542 9.76667 11.2333 10 11.6ZM11.95 17.5C12.5667 17.3 13.2083 17.0083 13.875 16.625C14.5417 16.2417 15.1625 15.7208 15.7375 15.0625C16.3125 14.4042 16.8042 13.5833 17.2125 12.6C17.6208 11.6167 17.8667 10.4333 17.95 9.05C16.3833 9.28333 15.0083 9.80417 13.825 10.6125C12.6417 11.4208 11.7333 12.45 11.1 13.7C11.3 14.2333 11.4708 14.8167 11.6125 15.45C11.7542 16.0833 11.8667 16.7667 11.95 17.5Z" fill="#AA302B" />
    </svg>,
    <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 15C2.9 15 1.95833 14.6083 1.175 13.825C0.391667 13.0417 0 12.1 0 11C0 9.9 0.391667 8.95833 1.175 8.175C1.95833 7.39167 2.9 7 4 7C5.1 7 6.04167 7.39167 6.825 8.175C7.60833 8.95833 8 9.9 8 11C8 12.1 7.60833 13.0417 6.825 13.825C6.04167 14.6083 5.1 15 4 15ZM4 13C4.55 13 5.02083 12.8042 5.4125 12.4125C5.80417 12.0208 6 11.55 6 11C6 10.45 5.80417 9.97917 5.4125 9.5875C5.02083 9.19583 4.55 9 4 9C3.45 9 2.97917 9.19583 2.5875 9.5875C2.19583 9.97917 2 10.45 2 11C2 11.55 2.19583 12.0208 2.5875 12.4125C2.97917 12.8042 3.45 13 4 13ZM13.5 11C11.9667 11 10.6667 10.4667 9.6 9.4C8.53333 8.33333 8 7.03333 8 5.5C8 3.96667 8.53333 2.66667 9.6 1.6C10.6667 0.533333 11.9667 0 13.5 0C15.0333 0 16.3333 0.533333 17.4 1.6C18.4667 2.66667 19 3.96667 19 5.5C19 7.03333 18.4667 8.33333 17.4 9.4C16.3333 10.4667 15.0333 11 13.5 11ZM11.5 18C10.6667 18 9.95833 17.7083 9.375 17.125C8.79167 16.5417 8.5 15.8333 8.5 15C8.5 14.1667 8.79167 13.4583 9.375 12.875C9.95833 12.2917 10.6667 12 11.5 12C12.3333 12 13.0417 12.2917 13.625 12.875C14.2083 13.4583 14.5 14.1667 14.5 15C14.5 15.8333 14.2083 16.5417 13.625 17.125C13.0417 17.7083 12.3333 18 11.5 18ZM13.5 9C14.4833 9 15.3125 8.6625 15.9875 7.9875C16.6625 7.3125 17 6.48333 17 5.5C17 4.51667 16.6625 3.6875 15.9875 3.0125C15.3125 2.3375 14.4833 2 13.5 2C12.5167 2 11.6875 2.3375 11.0125 3.0125C10.3375 3.6875 10 4.51667 10 5.5C10 6.48333 10.3375 7.3125 11.0125 7.9875C11.6875 8.6625 12.5167 9 13.5 9ZM11.5 16C11.7833 16 12.0208 15.9042 12.2125 15.7125C12.4042 15.5208 12.5 15.2833 12.5 15C12.5 14.7167 12.4042 14.4792 12.2125 14.2875C12.0208 14.0958 11.7833 14 11.5 14C11.2167 14 10.9792 14.0958 10.7875 14.2875C10.5958 14.4792 10.5 14.7167 10.5 15C10.5 15.2833 10.5958 15.5208 10.7875 15.7125C10.9792 15.9042 11.2167 16 11.5 16Z" fill="#AA302B" />
    </svg>,
    <svg width="22" height="21" viewBox="2 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21 10L20.375 8.625L19 8L20.375 7.375L21 6L21.625 7.375L23 8L21.625 8.625L21 10ZM18 6L17.05 3.95L15 3L17.05 2.05L18 0L18.95 2.05L21 3L18.95 3.95L18 6ZM8 22C7.45 22 6.97917 21.8042 6.5875 21.4125C6.19583 21.0208 6 20.55 6 20H10C10 20.55 9.80417 21.0208 9.4125 21.4125C9.02083 21.8042 8.55 22 8 22ZM4 19V17H12V19H4ZM4.25 16C3.1 15.3167 2.1875 14.4 1.5125 13.25C0.8375 12.1 0.5 10.85 0.5 9.5C0.5 7.41667 1.22917 5.64583 2.6875 4.1875C4.14583 2.72917 5.91667 2 8 2C10.0833 2 11.8542 2.72917 13.3125 4.1875C14.7708 5.64583 15.5 7.41667 15.5 9.5C15.5 10.85 15.1625 12.1 14.4875 13.25C13.8125 14.4 12.9 15.3167 11.75 16H4.25ZM4.85 14H11.15C11.9 13.4667 12.4792 12.8083 12.8875 12.025C13.2958 11.2417 13.5 10.4 13.5 9.5C13.5 7.96667 12.9667 6.66667 11.9 5.6C10.8333 4.53333 9.53333 4 8 4C6.46667 4 5.16667 4.53333 4.1 5.6C3.03333 6.66667 2.5 7.96667 2.5 9.5C2.5 10.4 2.70417 11.2417 3.1125 12.025C3.52083 12.8083 4.1 13.4667 4.85 14Z" fill="#AA302B" />
    </svg>,
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.95 16C10.3 16 10.596 15.879 10.838 15.637C11.0793 15.3957 11.2 15.1 11.2 14.75C11.2 14.4 11.0793 14.1043 10.838 13.863C10.596 13.621 10.3 13.5 9.95 13.5C9.6 13.5 9.304 13.621 9.062 13.863C8.82067 14.1043 8.7 14.4 8.7 14.75C8.7 15.1 8.82067 15.3957 9.062 15.637C9.304 15.879 9.6 16 9.95 16ZM9.05 12.15H10.9C10.9 11.6 10.9627 11.1667 11.088 10.85C11.2127 10.5333 11.5667 10.1 12.15 9.55C12.5833 9.11667 12.925 8.704 13.175 8.312C13.425 7.92067 13.55 7.45 13.55 6.9C13.55 5.96667 13.2083 5.25 12.525 4.75C11.8417 4.25 11.0333 4 10.1 4C9.15 4 8.37933 4.25 7.788 4.75C7.196 5.25 6.78333 5.85 6.55 6.55L8.2 7.2C8.28333 6.9 8.471 6.575 8.763 6.225C9.05433 5.875 9.5 5.7 10.1 5.7C10.6333 5.7 11.0333 5.84567 11.3 6.137C11.5667 6.429 11.7 6.75 11.7 7.1C11.7 7.43333 11.6 7.74567 11.4 8.037C11.2 8.329 10.95 8.6 10.65 8.85C9.91667 9.5 9.46667 9.99167 9.3 10.325C9.13333 10.6583 9.05 11.2667 9.05 12.15ZM10 20C8.61667 20 7.31667 19.7373 6.1 19.212C4.88333 18.6873 3.825 17.975 2.925 17.075C2.025 16.175 1.31267 15.1167 0.788 13.9C0.262667 12.6833 0 11.3833 0 10C0 8.61667 0.262667 7.31667 0.788 6.1C1.31267 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.31233 6.1 0.787C7.31667 0.262333 8.61667 0 10 0C11.3833 0 12.6833 0.262333 13.9 0.787C15.1167 1.31233 16.175 2.025 17.075 2.925C17.975 3.825 18.6873 4.88333 19.212 6.1C19.7373 7.31667 20 8.61667 20 10C20 11.3833 19.7373 12.6833 19.212 13.9C18.6873 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6873 13.9 19.212C12.6833 19.7373 11.3833 20 10 20ZM10 18C12.2333 18 14.125 17.225 15.675 15.675C17.225 14.125 18 12.2333 18 10C18 7.76667 17.225 5.875 15.675 4.325C14.125 2.775 12.2333 2 10 2C7.76667 2 5.875 2.775 4.325 4.325C2.775 5.875 2 7.76667 2 10C2 12.2333 2.775 14.125 4.325 15.675C5.875 17.225 7.76667 18 10 18Z" fill="#AA302B" />
    </svg>,
  ]
  const svgActiveLinks = [
    <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 18V6L8 0L16 6V18H10V11H6V18H0Z" fill="#AA302B" />
    </svg>,
    <svg width="16" height="21" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 21L0.8 15.6C0.55 15.4167 0.354167 15.1833 0.2125 14.9C0.0708333 14.6167 0 14.3167 0 14V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H14C14.55 0 15.0208 0.195833 15.4125 0.5875C15.8042 0.979167 16 1.45 16 2V14C16 14.3167 15.9292 14.6167 15.7875 14.9C15.6458 15.1833 15.45 15.4167 15.2 15.6L8 21ZM6.95 13L12.6 7.35L11.2 5.9L6.95 10.15L4.85 8.05L3.4 9.45L6.95 13Z" fill="#AA302B" />
    </svg>,
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.99999 20C8.43333 19.8 7.03333 19.4 5.79999 18.8C4.56666 18.2 3.52083 17.4167 2.66249 16.45C1.80416 15.4833 1.14999 14.3625 0.699994 13.0875C0.249994 11.8125 0.0249939 10.4 0.0249939 8.85C1.85833 9.03333 3.40833 9.36667 4.67499 9.85C5.94166 10.3333 6.97083 11.0167 7.76249 11.9C8.55416 12.7833 9.12499 13.8875 9.47499 15.2125C9.82499 16.5375 9.99999 18.1333 9.99999 20ZM9.99999 11.575C9.61666 10.9917 9.09583 10.4167 8.43749 9.85C7.77916 9.28333 7.01666 8.76667 6.14999 8.3C6.24999 7.6 6.41666 6.875 6.64999 6.125C6.88333 5.375 7.16666 4.6375 7.49999 3.9125C7.83333 3.1875 8.21249 2.49167 8.63749 1.825C9.06249 1.15833 9.51666 0.55 9.99999 0C10.4833 0.55 10.9375 1.15833 11.3625 1.825C11.7875 2.49167 12.1667 3.1875 12.5 3.9125C12.8333 4.6375 13.1167 5.375 13.35 6.125C13.5833 6.875 13.75 7.6 13.85 8.3C12.9833 8.75 12.2208 9.25833 11.5625 9.825C10.9042 10.3917 10.3833 10.975 9.99999 11.575ZM12 19.6C11.9667 18.4333 11.8792 17.3542 11.7375 16.3625C11.5958 15.3708 11.375 14.4333 11.075 13.55C11.8583 12.2 12.9375 11.1 14.3125 10.25C15.6875 9.4 17.575 8.93333 19.975 8.85C19.9917 11.4833 19.2875 13.7542 17.8625 15.6625C16.4375 17.5708 14.4833 18.8833 12 19.6Z" fill="#AA302B" />
    </svg>,
    <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 15C2.9 15 1.95833 14.6083 1.175 13.825C0.391667 13.0417 0 12.1 0 11C0 9.9 0.391667 8.95833 1.175 8.175C1.95833 7.39167 2.9 7 4 7C5.1 7 6.04167 7.39167 6.825 8.175C7.60833 8.95833 8 9.9 8 11C8 12.1 7.60833 13.0417 6.825 13.825C6.04167 14.6083 5.1 15 4 15ZM13.5 11C11.9667 11 10.6667 10.4667 9.6 9.4C8.53333 8.33333 8 7.03333 8 5.5C8 3.96667 8.53333 2.66667 9.6 1.6C10.6667 0.533333 11.9667 0 13.5 0C15.0333 0 16.3333 0.533333 17.4 1.6C18.4667 2.66667 19 3.96667 19 5.5C19 7.03333 18.4667 8.33333 17.4 9.4C16.3333 10.4667 15.0333 11 13.5 11ZM11.5 18C10.6667 18 9.95833 17.7083 9.375 17.125C8.79167 16.5417 8.5 15.8333 8.5 15C8.5 14.1667 8.79167 13.4583 9.375 12.875C9.95833 12.2917 10.6667 12 11.5 12C12.3333 12 13.0417 12.2917 13.625 12.875C14.2083 13.4583 14.5 14.1667 14.5 15C14.5 15.8333 14.2083 16.5417 13.625 17.125C13.0417 17.7083 12.3333 18 11.5 18Z" fill="#AA302B" />
    </svg>,
    <svg width="22" height="21" viewBox="2 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21 10L20.375 8.625L19 8L20.375 7.375L21 6L21.625 7.375L23 8L21.625 8.625L21 10ZM18 6L17.05 3.95L15 3L17.05 2.05L18 0L18.95 2.05L21 3L18.95 3.95L18 6ZM8 22C7.45 22 6.97917 21.8042 6.5875 21.4125C6.19583 21.0208 6 20.55 6 20H10C10 20.55 9.80417 21.0208 9.4125 21.4125C9.02083 21.8042 8.55 22 8 22ZM4 19V17H12V19H4ZM4.25 16C3.1 15.3167 2.1875 14.4 1.5125 13.25C0.8375 12.1 0.5 10.85 0.5 9.5C0.5 7.41667 1.22917 5.64583 2.6875 4.1875C4.14583 2.72917 5.91667 2 8 2C10.0833 2 11.8542 2.72917 13.3125 4.1875C14.7708 5.64583 15.5 7.41667 15.5 9.5C15.5 10.85 15.1625 12.1 14.4875 13.25C13.8125 14.4 12.9 15.3167 11.75 16H4.25Z" fill="#AA302B" />
    </svg>,
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.95 16C10.3 16 10.596 15.879 10.838 15.637C11.0793 15.3957 11.2 15.1 11.2 14.75C11.2 14.4 11.0793 14.1043 10.838 13.863C10.596 13.621 10.3 13.5 9.95 13.5C9.6 13.5 9.304 13.621 9.062 13.863C8.82067 14.1043 8.7 14.4 8.7 14.75C8.7 15.1 8.82067 15.3957 9.062 15.637C9.304 15.879 9.6 16 9.95 16ZM9.05 12.15H10.9C10.9 11.6 10.9627 11.1667 11.088 10.85C11.2127 10.5333 11.5667 10.1 12.15 9.55C12.5833 9.11667 12.925 8.704 13.175 8.312C13.425 7.92067 13.55 7.45 13.55 6.9C13.55 5.96667 13.2083 5.25 12.525 4.75C11.8417 4.25 11.0333 4 10.1 4C9.15 4 8.37933 4.25 7.788 4.75C7.196 5.25 6.78333 5.85 6.55 6.55L8.2 7.2C8.28333 6.9 8.471 6.575 8.763 6.225C9.05433 5.875 9.5 5.7 10.1 5.7C10.6333 5.7 11.0333 5.84567 11.3 6.137C11.5667 6.429 11.7 6.75 11.7 7.1C11.7 7.43333 11.6 7.74567 11.4 8.037C11.2 8.329 10.95 8.6 10.65 8.85C9.91667 9.5 9.46667 9.99167 9.3 10.325C9.13333 10.6583 9.05 11.2667 9.05 12.15ZM10 20C8.61667 20 7.31667 19.7373 6.1 19.212C4.88333 18.6873 3.825 17.975 2.925 17.075C2.025 16.175 1.31267 15.1167 0.788 13.9C0.262667 12.6833 0 11.3833 0 10C0 8.61667 0.262667 7.31667 0.788 6.1C1.31267 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.31233 6.1 0.787C7.31667 0.262333 8.61667 0 10 0C11.3833 0 12.6833 0.262333 13.9 0.787C15.1167 1.31233 16.175 2.025 17.075 2.925C17.975 3.825 18.6873 4.88333 19.212 6.1C19.7373 7.31667 20 8.61667 20 10C20 11.3833 19.7373 12.6833 19.212 13.9C18.6873 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6873 13.9 19.212C12.6833 19.7373 11.3833 20 10 20Z" fill="#AA302B" />
    </svg>

  ]
  return (
    <nav className='w-full my-0 sm:m-0 lg:-mt-5 rounded border-slate-200'>
      <div className='flex md:flex-nowrap md:items-center md:mx-auto'>
        <NavLink
          className='block lg:hidden first-letter:w-fit p-5 hover:brightness-110 transition-all'
          to='/'
        >
          <span className='text-2xl text-palette-Auburn font-bold font-Cremona'>
            B
            <img
              src='/assets/imgpage/Bossy2_Mesa de trabajo mobile.png'
              className='w-[2rem] inline'
              alt='Logo de Bossy Skincare'
            />
            SSY
          </span>
        </NavLink>
        <NavLink
          className='hidden lg:block w-fit hover:brightness-110 transition-all'
          to='/'
        >
          <img
            className='w-[5rem] md:w-[6rem] lg:w-[8rem] xl:w-[10rem]'
            src='/assets/imgpage/bossyLogo.png'
            alt='Logo de Bossy skincare'
          />
        </NavLink>

        <div
          className='fixed w-full left-0 bottom-0 pt-3 pb-4 shadow-t-xl bg-palette-OrchidPink lg:hidden z-50'
          id='navbar-mobile'
        >
          <ul className='flex justify-around'>
            {svgLinks.map((_, i) => (
              <NavItem
                link={codeLinks[i]}
                svg={svgLinks[i]}
                svgActive={svgActiveLinks[i]}
                isActive={i === activeIndex}
                onClick={() => handleClick(i)}
                key={i} />
            ))}
          </ul>
        </div>

        <div
          className='hidden w-full lg:block left-0 top-0'
          id='navbar-desktop'
        >
          <ul className='flex flex-row p-4 md:justify-evenly lg:gap-1 bg-inherit'>
            {links.map((el, i) => (
              <li key={i}>
                <NavLink
                  to={codeLinks[i]}
                  className={({ isActive }) => {
                    return (
                      "block p-0 text-xl text-gray-700 border-b-4 transition-colors font-UrbanistMedium" +
                      (isActive
                        ? " border-palette-Auburn"
                        : " border-transparent")
                    )
                  }}
                >
                  {`${el}`}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
