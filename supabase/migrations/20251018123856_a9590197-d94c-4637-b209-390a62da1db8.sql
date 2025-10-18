-- Delete the unwanted file from storage
DELETE FROM storage.objects 
WHERE bucket_id = 'cv-documents' 
AND name = 'all_cvs_found/all_cvs_found/$80 Massage Troy.pdf';

-- Clean up any ingestion log entries (using correct column name)
DELETE FROM ingestion_log 
WHERE source_file LIKE '%$80 Massage Troy.pdf%';

-- Clean up any parsed CV records (using correct column name)
DELETE FROM cv_master 
WHERE source_files @> ARRAY['all_cvs_found/all_cvs_found/$80 Massage Troy.pdf'];