-- Update the two card titles as requested
UPDATE lenovo_focus_images 
SET title = CASE 
  WHEN title = 'Executive Dashboard View' THEN 'Device lifecycle RACI'
  WHEN title = 'Value Proposition Matrix' THEN 'Device lifecycle Subscription Tiers'
  ELSE title
END
WHERE title IN ('Executive Dashboard View', 'Value Proposition Matrix');