-- 	Listar los estudiantes (read)
SELECT * FROM estudiantes2025;
-- Insertar estudiante
-- INSERT INTO estudiantes2025 (nombre, apellido, telefono, email) VALUES ("Carlos", "Fernandez", "2604585960", "carlangas@mail.com");
-- Update (Modificar)
UPDATE estudiantes2025 SET nombre="Flor", apellido="Fernandecita" WHERE idestudiantes2025=3;
--  Delete (eliminar)
DELETE FROM estudiantes2025 WHERE idestudiantes2025=5;
-- Modificar el idestudiantes2025 y comience con 1
-- ALERT TABLE estudiantes2025 AUTO_INCREMENT = 1;