import React from 'react';
import style from './FAQ.module.scss';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Paper from '@mui/material/Paper';

const FAQ = () => {
  const Questions = [
    {
      summary: 'Does PC Club offer online ordering?',
      details:
        'Yes, PC Club offers online ordering through its website. This allows customers to shop for products from the comfort of their own home, and enjoy convenient delivery options. The PC Club website offers a wide range of products, detailed product descriptions, and customer reviews to help customers make informed purchasing decisions. Customers can also take advantage of exclusive online deals and promotions, and track their orders in real-time for added convenience.',
    },
    {
      summary: 'Does PC Club have a return policy?',
      details:
        "Yes, PC Club has a return policy that allows customers to return most products within 14 days of purchase for a full refund or exchange. The company's return policy is designed to ensure customer satisfaction, and applies to products that are in new, unused condition with all original packaging and accessories. Certain restrictions and exclusions may apply, such as software that has been opened or activated, and customers should check with a sales associate or review the company's website for specific details.",
    },
    {
      summary: "What are PC Club's store hours?",
      details:
        "PC Club's store hours vary by location, so customers should check the store locator on the company's website to find the hours for their nearest store. Most stores are open seven days a week, with extended hours on weekends and holidays. Customers can also shop online 24/7 through the PC Club website, which offers a wide range of products and convenient ordering options.",
    },
  ];

  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Paper
      className={style.FAQ}
      elevation={3}
      sx={{ backgroundColor: '#f8f8f8' }}
    >
      <h3 className={style.FAQTitle}>FAQ</h3>
      <h1 className={style.Title}>Frequently Asked Questions</h1>
      <div className={style.SubTitle}>
        Frequently Asked Questions About the Car Rental Booking Process on Our
        Website: Answers to Common Concerns and Inquiries.
      </div>
      {Questions.map((question, id) => {
        return (
          <Accordion
            key={question.details}
            expanded={expanded === 'panel' + (id + 1)}
            onChange={handleChange('panel' + (id + 1))}
          >
            <AccordionSummary
              sx={{
                backgroundColor:
                  expanded === 'panel' + (id + 1) ? '#ff4d30' : '#fff',
                color: expanded === 'panel' + (id + 1) ? '#fff' : '#000',
              }}
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel1a-content'
              id='panel1a-header'
            >
              <h3 className={style.Summary}>{question.summary}</h3>
            </AccordionSummary>
            <AccordionDetails>
              <h5 className={style.Details}>{question.details}</h5>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </Paper>
  );
};

export default FAQ;
