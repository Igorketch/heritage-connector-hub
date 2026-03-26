import { useLanguage } from '@/contexts/LanguageContext';
import { getAllSagesMembers } from '@/data/comiteSagesData';
import GenericMemberProfilePage from '@/components/team/GenericMemberProfilePage';

const SagesMemberProfilePage = () => {
  const { language, t } = useLanguage();
  return (
    <GenericMemberProfilePage
      members={getAllSagesMembers(language)}
      backPath="/team/comite-sages"
      backLabel={t('team.cat.sages')}
    />
  );
};

export default SagesMemberProfilePage;
