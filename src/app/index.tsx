import { Alert, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import DirektoriMahasiswa from '../components/DirektoriMahasiswa';
import InfoCard from '../components/InfoCard';

export default function App() {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.heading}>Daftar Tugas</Text>

        <InfoCard
          title="Laporan Jobsheet 04"
          status="selesai"
          onPress={() => Alert.alert('Detail', 'Laporan Jobsheet 04 sudah selesai.')}
        />
        <InfoCard
          title="Proyek Aplikasi Mobile"
          status="proses"
          onPress={() => Alert.alert('Detail', 'Proyek Aplikasi Mobile masih dikerjakan.')}
        />

        <View style={styles.divider} />

        <View style={styles.directory}>
          <DirektoriMahasiswa />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#f2f4f7' },
  content: { padding: 16, paddingTop: 40 },
  heading: { fontSize: 20, fontWeight: 'bold', marginBottom: 12 },
  divider: { height: 1, backgroundColor: '#ddd', marginVertical: 20 },
  directory: { minHeight: 400 },
});