INSERT INTO `tipos` (`tipoDeProductoID`, `tipoDeProducto`) VALUES
(1, 'Prints'),
(2, 'Enmarcados'),
(3, 'Servicios fotograficos');

INSERT INTO `tamanos` (`tamanoDeProductoID`, `tamanoDeProducto`) VALUES
(1, 'pequeño'),
(2, 'mediano'),
(3, 'grande'),
(4, 'master');


INSERT INTO `productos` (`productoID`, `nombre`, `descripcion`, `precio`, `tipoDeProductoID`, `tamanoDeProductoID`, `fotoProducto`) VALUES
(1, 'Fotografía a paisajes', 'Fotografía a paisajes en toda la Argentina y Brasil.', '7500.00', 3, 1, '1677534038520.jpg'),
(2, 'Fotografía a productos', 'Fotografía a productos para impulsar sus ventas.', '2000.00', 3, 1, '1676787783743.jpg'),
(3, 'Fotografía en eventos', 'Fotografía de eventos en Argentina y Brasil.', '3000.00', 3, 1, '1676787859854.jpg'),
(4, 'Fotografía en deporte', 'Fotografía en desarrollo de diferentes disiplinas deportivas', '5000.00', 3, 3, '1676787913343.jpg');


INSERT INTO `usuarios` (`usuarioID`, `nombre`, `email`, `contrasena`, `fotoUsuario`, `carritoProductoID`) VALUES
(1, 'nico', 'nico@gmail.com', '$2a$10$HmZAMfdHKB/9CxsQy0OaA..wybaFQVMe3mUu9hr6UQLymqa587Yha', '1676787319476.jpg', NULL),
(2, 'ariel', 'ariel@gmail.com', '$2a$10$nF2/2XMpTyWTOckjGljBre7n.7qNIvdWdV/5FW1OtG6kQs1su7nga', '1676787438227.jpg', NULL),
(3, 'caro', 'caro@gmail.com', '$2a$10$mIyWBu.eL48VcF8bG/RDquFFEOdFiwGUiWzO4T2aUeigG.kVtH/zi', '1676787457341.jpg', NULL),
(4, 'cesar', 'cesar@gmail.com', '$2a$10$nNjJi6Ds/YEGAeg/tCmVkeK1k38wj4UTubHXjzRZbJ.XcR/8i5RNi', '1676787479233.jpg', NULL),
(5, 'natalia', 'natalia@gmail.com', '$2a$10$3ugtr4iANJ7Mt.X49JwIL.73a91Erqo59YYOshiOQKQV3joHed5bu', '1676787500550.jpg', NULL),
(6, 'silvio', 'silvio@gmail.com', '$2a$10$00Bu8xeU1b7JaYPjL362MOJGJo5lzFZSHYBubgWrmmb8GVo32x3pG', '1676787532150.png', NULL);
