var certificateModule = (function() {
    return {
        generateCertificate: function(data) {
            var imageData =

            // create document
            var doc = new jsPDF();
            doc.addImage(imageData, 'JPEG', 15, 40, 180, 140);

            // add title
            doc.setFont('times');
            doc.setFontType('italic');
            doc.setTextColor(29, 210, 242);
            doc.setFontSize(21);
            doc.text(100, 75, 'TYPING SPEED CERTIFICATE', 'center');

            ///add text
            doc.setTextColor(96, 96, 96);
            doc.setFontSize(14);
            doc.text(105, 83, 'This Certificate is Hereby Awarded to: ', 'center');

            //add name
            var button = event.target;
            var nameField = button.parentElement.previousElementSibling.children[1].children[1];
            var name = nameField.value;
            doc.setTextColor(29, 210, 242);
            doc.setFontSize(19);
            doc.text(105, 90, name, 'center');

            //add text
            doc.setTextColor(96, 96, 96);
            doc.setFontSize(14);
            doc.text(105, 100, 'For Achieving Results noted below as documented', 'center');
            doc.text(105, 107, 'and verified by Armadillo Solutions', 'center');

            //add results
            var level = event.target.getAttribute('level');
            doc.text(105, 117, 'Level: ' + level, 'center');
            doc.text(105, 124, 'Average Speed: ' + data.wpm + 'wpm', 'center');
            doc.text(105, 131, 'Accuracy: ' + data.accuracy + '%', 'center');

            //add date
            var date = new Date();
            date = date.toLocaleDateString('en-US');
            doc.text(125, 142, 'Awarded on: ' + date);

            //add brand
            doc.setFontSize(12);
            doc.text(125, 150, 'ARMADILLO SOLUTIONS');
            doc.save('certificate.pdf');
        }
    };
})();