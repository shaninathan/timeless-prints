import React from 'react';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import {
  NotFoundContainer,
  NotFoundContent,
  HomeButton
} from './NotFound.styles';

const NotFound = () => {
  return (
    <NotFoundContainer>
      <NotFoundContent>
        <Typography variant="h1" component="h1" gutterBottom>
          404
        </Typography>
        <Typography variant="h4" component="h2" gutterBottom>
          הדף לא נמצא
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          מצטערים, הדף שחיפשת לא קיים.
        </Typography>
        <HomeButton
          component={Link}
          to="/"
          variant="contained"
        >
          חזרה לדף הבית
        </HomeButton>
      </NotFoundContent>
    </NotFoundContainer>
  );
};

export default NotFound; 