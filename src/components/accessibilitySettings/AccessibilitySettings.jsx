import React, { useState, useEffect } from 'react';
import {
  Typography,
  Switch,
  Slider,
  Tooltip,
} from '@mui/material';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import { useDispatch, useSelector } from 'react-redux';
import { setFontSize, setHighContrast, setScreenReader, setReducedMotion } from '../../store/accessibilitySlice';
import { StyledDrawer, ToggleButton, SettingsContainer, SettingItem } from './AccessibilitySettings.styles.jsx';

const AccessibilitySettings = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const { fontSize, highContrast, screenReader, reducedMotion } = useSelector((state) => state.accessibility);

  useEffect(() => {
    // עדכון גודל הטקסט
    document.documentElement.style.fontSize = `${fontSize}px`;
    
    // עדכון ניגודיות
    if (highContrast) {
      document.body.classList.add('high-contrast');
    } else {
      document.body.classList.remove('high-contrast');
    }
    
    // עדכון אנימציות
    if (reducedMotion) {
      document.body.classList.add('reduced-motion');
    } else {
      document.body.classList.remove('reduced-motion');
    }
  }, [fontSize, highContrast, reducedMotion]);

  const handleFontSizeChange = (event, newValue) => {
    dispatch(setFontSize(newValue));
  };

  const handleHighContrastChange = (event) => {
    dispatch(setHighContrast(event.target.checked));
  };

  const handleScreenReaderChange = (event) => {
    dispatch(setScreenReader(event.target.checked));
  };

  const handleReducedMotionChange = (event) => {
    dispatch(setReducedMotion(event.target.checked));
  };

  return (
    <>
      <Tooltip title="הגדרות נגישות">
        <ToggleButton onClick={() => setOpen(!open)} size="small">
          <AccessibilityIcon fontSize="small" />
        </ToggleButton>
      </Tooltip>
      <StyledDrawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <SettingsContainer>
          <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600 }}>
            הגדרות נגישות
          </Typography>
          
          <SettingItem>
            <Typography variant="body2">גודל טקסט</Typography>
            <Slider
              value={fontSize}
              onChange={handleFontSizeChange}
              min={12}
              max={24}
              step={1}
              marks
              valueLabelDisplay="auto"
              sx={{ width: '100px' }}
              size="small"
            />
          </SettingItem>

          <SettingItem>
            <Typography variant="body2">ניגודיות גבוהה</Typography>
            <Switch
              checked={highContrast}
              onChange={handleHighContrastChange}
              size="small"
            />
          </SettingItem>

          <SettingItem>
            <Typography variant="body2">קורא מסך</Typography>
            <Switch
              checked={screenReader}
              onChange={handleScreenReaderChange}
              size="small"
            />
          </SettingItem>

          <SettingItem>
            <Typography variant="body2">הפחתת אנימציות</Typography>
            <Switch
              checked={reducedMotion}
              onChange={handleReducedMotionChange}
              size="small"
            />
          </SettingItem>
        </SettingsContainer>
      </StyledDrawer>
    </>
  );
};

export default AccessibilitySettings; 