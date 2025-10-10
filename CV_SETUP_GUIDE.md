# 📄 CV Section Setup Guide

## ✅ What's Been Added

I've added a complete CV section to your portfolio with the following features:

### 🎯 Features
1. **CV Section** - Located between Projects and Teaching sections
2. **Two Buttons**:
   - **VIEW CV** - Opens a modal with CV preview
   - **DOWNLOAD CV** - Downloads CV as HTML file
3. **Navigation Links** - Added [CV] link to header and footer
4. **Sci-Fi Styling** - Matches your cyberpunk theme

### 🎨 Design Elements
- Holographic card with glowing effects
- Large file icon
- Neon buttons with hover effects
- Full-screen modal for CV preview
- Smooth animations

## 📝 How to Use

### Current Setup (HTML Download)
The CV currently downloads as an HTML file containing:
- Your contact information
- Professional summary
- Education
- Experience
- Publications
- Technical skills

### 🔄 To Add a Real PDF CV

If you want to use a real PDF file instead:

#### Step 1: Add Your PDF to the Project
```bash
# Copy your CV PDF to the public folder
cp /path/to/your/cv.pdf /home/tuhin/Downloads/tuhin-portfolio-bw/public/Tuhin_Chowdhury_CV.pdf
```

#### Step 2: Update CVSection.jsx

Replace the `handleDownload` function in `/src/components/CVSection.jsx`:

```javascript
const handleDownload = () => {
  // Direct download of PDF from public folder
  const link = document.createElement('a');
  link.href = '/Tuhin_Chowdhury_CV.pdf';
  link.download = 'Tuhin_Chowdhury_CV.pdf';
  link.target = '_blank';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
```

#### Step 3: Update the Modal to Show PDF

You can also update the modal to display the PDF:

```javascript
{showCVModal && (
  <motion.div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
    <motion.div className="bg-black border-2 border-cyan-500 rounded-lg w-full max-w-6xl h-[90vh]">
      <div className="flex justify-between items-center p-6 border-b-2 border-cyan-500/30">
        <h3 className="text-2xl font-bold text-cyan-400 font-mono">// CV_PREVIEW</h3>
        <button onClick={() => setShowCVModal(false)}>
          <X size={24} className="text-cyan-400" />
        </button>
      </div>
      
      {/* PDF Viewer */}
      <iframe 
        src="/Tuhin_Chowdhury_CV.pdf"
        className="w-full h-[calc(100%-80px)]"
        title="CV Preview"
      />
      
      <div className="p-6 border-t-2 border-cyan-500/30">
        <button onClick={handleDownload} className="neon-button">
          DOWNLOAD PDF
        </button>
      </div>
    </motion.div>
  </motion.div>
)}
```

## 🎯 Customizing CV Content

To update the CV content displayed in the preview modal, edit the `cvData` object in `/src/components/CVSection.jsx`:

```javascript
const cvData = {
  name: "Your Name",
  title: "Your Title",
  contact: {
    email: "your.email@example.com",
    phone: "+1234567890",
    location: "Your Location"
  },
  // ... update all sections
};
```

## 🚀 Alternative: Generate PDF with jsPDF

If you want to generate a PDF dynamically from your data:

1. Install jsPDF:
```bash
npm install jspdf jspdf-autotable
```

2. Update the component to use jsPDF:
```javascript
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const generatePDF = () => {
  const doc = new jsPDF();
  
  // Add content
  doc.setFontSize(20);
  doc.text(cvData.name, 20, 20);
  doc.setFontSize(12);
  doc.text(cvData.title, 20, 30);
  
  // Add more content...
  
  // Save
  doc.save('Tuhin_Chowdhury_CV.pdf');
};
```

## 📍 Navigation

The CV section is accessible via:
- Header navigation: `[CV]` button
- Footer navigation: `[CV]` button
- Smooth scroll to section ID: `#cv`

## 🎨 Styling

The CV section uses:
- `.holo-card` - Holographic card effect
- `.neon-button` - Neon button with glow
- `.sci-fi-glow` - Glowing text effect
- Cyan (#00ffff) and purple (#6e00ff) color scheme

All styling matches your existing sci-fi theme!

## 📂 File Structure

```
src/
├── components/
│   ├── CVSection.jsx       # CV section component
│   └── Footer.jsx          # Updated with CV link
└── pages/
    └── SinglePagePortfolio.jsx  # Integrated CV section
```

Enjoy your new CV section! 🎉

