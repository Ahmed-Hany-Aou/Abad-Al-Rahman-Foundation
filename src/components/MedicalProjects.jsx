import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Activity, Eye, Bone, HeartPulse, Droplets } from 'lucide-react';
import { IMAGES } from '../constants/images';

const MedicalProjects = () => {
  const { t } = useTranslation('projects');

  const projects = [
    {
      id: 'radiology',
      icon: <Activity size={32} />,
      titleKey: 'radiology',
      descKey: 'radiologyDesc',
    },
    {
      id: 'eye',
      icon: <Eye size={32} />,
      titleKey: 'eye',
      descKey: 'eyeDesc',
    },
    {
      id: 'physical',
      icon: <Bone size={32} />,
      titleKey: 'physical',
      descKey: 'physicalDesc',
    },
    {
      id: 'icu',
      icon: <HeartPulse size={32} />,
      titleKey: 'icu',
      descKey: 'icuDesc',
    },
    {
      id: 'dialysis',
      icon: <Droplets size={32} />,
      titleKey: 'dialysis',
      descKey: 'dialysisDesc',
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.section 
      className="medical-projects-section"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">{t('title')}</h2>
          <p className="section-subtitle">{t('subtitle')}</p>
        </div>

        <motion.div 
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project) => (
            <motion.div key={project.id} className="project-card" variants={itemVariants}>
              <div className="project-icon-wrapper">
                {project.icon}
              </div>
              <h3 className="project-card-title">{t(project.titleKey)}</h3>
              <p className="project-card-desc">{t(project.descKey)}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="projects-image-wrapper">
          <img src={IMAGES.medicalProjectsFeature} alt="Medical Facility" className="projects-featured-image" />
        </div>
      </div>
    </motion.section>
  );
};

export default MedicalProjects;
