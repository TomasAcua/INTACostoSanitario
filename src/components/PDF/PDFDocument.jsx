import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    padding: 40,
    backgroundColor: '#f8f9fa',
    fontSize: 12,
    fontFamily: 'Helvetica',
  },
  header: {
    fontSize: 24,
    backgroundColor: '#343a40',
    color: '#ffffff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    textAlign: 'center',
    borderRadius: 6,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    marginBottom: 10,
    marginTop: 20,
    color: '#333',
    borderBottom: '1 solid #dee2e6',
    paddingBottom: 5,
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 250,
    objectFit: 'contain',
    border: '1 solid #ccc',
    borderRadius: 4,
  },
  table: {
    display: 'table',
    width: 'auto',
    marginTop: 10,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#ced4da',
  },
  tableRow: {
    flexDirection: 'row',
  },
  tableHeader: {
    backgroundColor: '#e9ecef',
    fontWeight: 'bold',
  },
  tableCell: {
    padding: 8,
    borderRight: '1 solid #ced4da',
    borderBottom: '1 solid #ced4da',
    width: '50%',
    textAlign: 'center',
  },
});

const PDFDocument = ({ chartImage, products = [] }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.header}>Reporte de Productos</Text>
        {chartImage && (
          <>
            <Text style={styles.sectionTitle}>Gráfico de Costos</Text>
            <View style={styles.imageContainer}>
              <Image src={chartImage} style={styles.image} />
            </View>
          </>
        )}

        {products.length > 0 && (
          <>
            <Text style={styles.sectionTitle}>Listado de Productos</Text>
            <View style={styles.table}>
              <View style={[styles.tableRow, styles.tableHeader]}>
                <Text style={styles.tableCell}>Nombre</Text>
                <Text style={styles.tableCell}>Costo</Text>
              </View>
              {products.map((p, i) => (
                <View style={styles.tableRow} key={i}>
                  <Text style={styles.tableCell}>{p.name}</Text>
                  <Text style={styles.tableCell}>${p.cost}</Text>
                </View>
              ))}
            </View>
          </>
        )}
      </Page>
    </Document>
  );
};

export default PDFDocument;
