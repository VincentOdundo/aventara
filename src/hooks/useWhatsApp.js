import { WHATSAPP_NUMBER } from '../data/safaris';

/**
 * Generate a WhatsApp deep link with a pre-formatted booking message.
 * @param {Object} options
 * @param {string} options.packageName - Name of the safari package
 * @param {number} options.days - Number of days
 * @param {string} options.season - 'Low Season' or 'High Season'
 * @param {number} options.price - Price per person
 * @param {number} options.guests - Number of travelers
 * @param {string} options.startDate - Preferred start date (optional)
 * @returns {string} WhatsApp deep link URL
 */
export function useWhatsApp() {
  const generateLink = ({
    packageName,
    days,
    season,
    price,
    guests = 1,
    startDate = 'Flexible',
  }) => {
    const total = price * guests;
    const message = encodeURIComponent(
      `🌍 *Aventara Safaris Booking Request*\n\n` +
      `📦 Package: ${packageName}\n` +
      `📅 Duration: ${days} Days\n` +
      `📆 Preferred Dates: ${startDate}\n` +
      `👥 Travelers: ${guests} person(s)\n` +
      `🏷️ Season: ${season}\n` +
      `💰 Price: $${price} per person\n` +
      `💵 Estimated Total: $${total}\n\n` +
      `I'd like to book this safari. Please confirm availability!\n\n` +
      `— Sent from aventarasafaris.com`
    );
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
  };

  const generateInquiry = (subject = 'General Inquiry') => {
    const message = encodeURIComponent(
      `🌍 *Aventara Safaris Inquiry*\n\n` +
      `Subject: ${subject}\n\n` +
      `Hi! I'd like to learn more about your safari packages.\n\n` +
      `— Sent from aventarasafaris.com`
    );
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
  };

  return { generateLink, generateInquiry };
}
