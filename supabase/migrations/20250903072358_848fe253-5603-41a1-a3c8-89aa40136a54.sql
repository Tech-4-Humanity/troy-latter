-- Update the three card titles as requested
UPDATE lenovo_focus_images 
SET title = CASE 
  WHEN title = 'Service Delivery Model' THEN 'Value in the water'
  WHEN title = 'Market Positioning Framework' THEN 'One set of customer roadmaps'
  WHEN title = 'Lenovo Strategic Overview' THEN 'super customer experiences'
  ELSE title
END
WHERE title IN ('Service Delivery Model', 'Market Positioning Framework', 'Lenovo Strategic Overview');