import { useLanguage } from '@/contexts/LanguageContext';
import { conseilMembers } from '@/data/conseilAdministrationData';
import GenericMemberProfilePage from '@/components/team/GenericMemberProfilePage';

const ConseilMemberProfilePage = () => {
  const { language, t } = useLanguage();
  return (
    <GenericMemberProfilePage
      members={conseilMembers[language]}
      backPath="/team/conseil-administration"
      backLabel={t('team.cat.conseil')}
    />
  );
};

export default ConseilMemberProfilePage;
