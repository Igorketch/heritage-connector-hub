import { useLanguage } from '@/contexts/LanguageContext';
import { bureauData } from '@/data/bureauExecutifData';
import GenericMemberProfilePage from '@/components/team/GenericMemberProfilePage';

const BureauMemberProfilePage = () => {
  const { language, t } = useLanguage();
  return (
    <GenericMemberProfilePage
      members={bureauData[language]}
      backPath="/team/bureau-executif"
      backLabel={t('team.cat.bureau')}
    />
  );
};

export default BureauMemberProfilePage;
